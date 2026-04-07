const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API test sức khỏe server
app.get('/api/health', (req, res) => {
  res.json({ message: 'Spider-Sense is tingling! Backend is running.' });
});

// Kết nối MongoDB (Tạm thời khóa lại chờ có link Database)
/*
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Symbiote attached to MongoDB!'))
  .catch((err) => console.log('Database connection error: ', err));
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is swinging on port ${PORT}`);
});