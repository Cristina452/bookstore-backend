// Importa i moduli necessari
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importa il router delle rotte
const userRoutes = require('./routes/userRoutes');

// Crea un'applicazione Express
const app = express();

// Usa CORS e body-parser
app.use(cors());
app.use(bodyParser.json());

// Usa il router delle rotte per la registrazione utente
app.use('/api/users', userRoutes);  // Il prefisso '/api/users' è facoltativo

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
