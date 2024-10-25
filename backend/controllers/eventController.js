// backend/controllers/eventController.js
const Event = require('../models/Event'); // Import model Event

// Lấy danh sách sự kiện
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo sự kiện mới
const createEvent = async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
  });

  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xuất các hàm controller
module.exports = {
  getEvents,
  createEvent,
};
