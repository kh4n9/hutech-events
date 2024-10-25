// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_URL}${process.env.MONGODB_NAME}`;
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
