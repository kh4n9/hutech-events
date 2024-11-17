const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }
    try {
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ success: false, message: 'Email is already taken' });
        }
        user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({ success: false, message: 'Username is already taken' });
        }
        user = new User({ username, email, password: await bcrypt.hash(password, 10)
         });
        await user.save();
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(201).json({ success: true, message: 'User registered successfully', accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }
    try {
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }
        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, message: 'User logged in successfully', accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;