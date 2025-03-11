const Book = require('../models/bookModel');

// Ottieni tutti i libri
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ottieni libro per ISBN
const getBookByISBN = async (req, res) => {
    try {
        const book = await Book.findOne({ isbn: req.params.isbn });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ottieni libri per autore
const getBooksByAuthor = async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.author });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ottieni libri per titolo
const getBooksByTitle = async (req, res) => {
    try {
        const books = await Book.find({ title: { $regex: req.params.title, $options: 'i' } });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };
