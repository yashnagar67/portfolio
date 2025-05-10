const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Route files
const contactRoutes = require('./contactRoutes');

// Initialize app
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routes
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
}); 