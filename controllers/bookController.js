const Book = require('../models/bookModel');

// Ottieni tutti i libri
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
};

// Ottieni un libro in base all'ISBN
exports.getBookByISBN = async (req, res) => {
    try {
        const book = await Book.findOne({ isbn: req.params.isbn });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error });
    }
};

// Ottieni tutti i libri di un autore
exports.getBooksByAuthor = async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.author });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books by author', error });
    }
};

// Ottieni tutti i libri per titolo
exports.getBooksByTitle = async (req, res) => {
    try {
        const books = await Book.find({ title: new RegExp(req.params.title, 'i') });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books by title', error });
    }
};

// Crea un nuovo libro
exports.createBook = async (req, res) => {
    const { title, author, isbn, publishedDate, genre, description } = req.body;

    const newBook = new Book({
        title,
        author,
        isbn,
        publishedDate,
        genre,
        description,
    });

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error });
    }
};

// Aggiorna un libro
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error });
    }
};

// Elimina un libro
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error });
    }
};
