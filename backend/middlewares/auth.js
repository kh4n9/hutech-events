const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
    const authHeader = req.header('authorization');
    const accessToken = authHeader && authHeader.split(' ')[1];
    if(!accessToken) {
        return res.status(400).json({ success: false, message: 'Access token not found' });
    }
    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: 'Invalid token' });
    }
};

const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'You are not authorized to access this resource' });
        }
        next();
    });
};


module.exports = verifyToken;
module.exports = verifyAdmin;