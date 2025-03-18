const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Importa le rotte
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

// Carica le variabili d'ambiente
dotenv.config();

// Crea l'app Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connessione al DB
const connectDB = require('./config/db');
connectDB();

// Usa le rotte
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
