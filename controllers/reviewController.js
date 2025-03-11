const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

// Ottieni recensioni per un libro
const getReviewsByBook = async (req, res) => {
    try {
        const reviews = await Review.find({ bookId: req.params.bookId });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Aggiungi una recensione
const addReview = async (req, res) => {
    const { bookId, reviewText, rating } = req.body;
    const review = new Review({ bookId, userId: req.user._id, reviewText, rating });
    try {
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Modifica una recensione
const updateReview = async (req, res) => {
    try {
        const review = await Review.findOne({ _id: req.params.reviewId, userId: req.user._id });
        if (!review) return res.status(404).json({ message: 'Review not found or you are not authorized' });
        review.reviewText = req.body.reviewText;
        review.rating = req.body.rating;
        await review.save();
        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Elimina una recensione
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findOne({ _id: req.params.reviewId, userId: req.user._id });
        if (!review) return res.status(404).json({ message: 'Review not found or you are not authorized' });
        await review.remove();
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getReviewsByBook, addReview, updateReview, deleteReview };
