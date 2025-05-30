const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Rotte per gli utenti
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
