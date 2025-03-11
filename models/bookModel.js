const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
