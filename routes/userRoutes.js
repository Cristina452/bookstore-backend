// Importa express
const express = require('express');
const router = express.Router();

// Importa il controller per la gestione della registrazione
const userController = require('../controllers/userController');

// Definisci la rotta POST per la registrazione dell'utente
router.post('/register', userController.register);  // Aggiungi qui la funzione di callback corretta

// Esporta il router per essere utilizzato in altri file (es. app.js)
module.exports = router;
