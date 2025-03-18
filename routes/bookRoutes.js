const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotte per i libri
router.get('/', bookController.getAllBooks);
router.get('/:isbn', bookController.getBookByISBN);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/title/:title', bookController.getBooksByTitle);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
