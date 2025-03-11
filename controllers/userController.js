const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');

const addReview = async (req, res) => {
    const { bookId, text, rating } = req.body;
    try {
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        const review = new Review({
            user: req.user,
            book: bookId,
            text,
            rating
        });

        await review.save();
        book.reviews.push(review._id);
        await book.save();

        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Implementa anche la modifica e cancellazione della recensione se necessario
module.exports = { addReview };
