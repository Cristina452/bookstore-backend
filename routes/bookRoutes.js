const express = require('express');
const { getAllBooks, getBookByIsbn, getBooksByAuthor, getBooksByTitle } = require('../controllers/bookController');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:isbn', getBookByIsbn);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);

module.exports = router;
