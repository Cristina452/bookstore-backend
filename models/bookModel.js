const mongoose = require('mongoose');

// Schema per il libro
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    publishedDate: { type: Date },
    genre: { type: String },
    description: { type: String },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
