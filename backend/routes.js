// backend/routes.js
const express = require('express');
const router = express.Router();
const eventController = require('./controllers/eventController');
const userController = require('./controllers/userController');

// Route cho sự kiện
router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);

// Route cho người dùng
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router;
