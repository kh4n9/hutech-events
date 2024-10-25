// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes'); // Import routes

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Sử dụng routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
