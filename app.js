const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Import Routes
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
