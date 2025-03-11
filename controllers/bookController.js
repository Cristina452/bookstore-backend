const Book = require('../models/bookModel');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get book by ISBN
exports.getBookByISBN = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by author
exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by title
exports.getBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: { $regex: req.params.title, $options: 'i' } });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
