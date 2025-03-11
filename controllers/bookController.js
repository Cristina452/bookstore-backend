const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getBookByIsbn = async (req, res) => {
    const { isbn } = req.params;
    try {
        const book = await Book.findOne({ isbn });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getBooksByAuthor = async (req, res) => {
    const { author } = req.params;
    try {
        const books = await Book.find({ author });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getBooksByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const books = await Book.find({ title });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getAllBooks, getBookByIsbn, getBooksByAuthor, getBooksByTitle };
