const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

// Aggiungi una recensione
exports.addReview = async (req, res) => {
    const { bookId, userId, rating, comment } = req.body;

    const newReview = new Review({
        bookId,
        userId,
        rating,
        comment,
    });

    try {
        const review = await newReview.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

// Modifica una recensione
exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error });
    }
};

// Elimina una recensione
exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};
