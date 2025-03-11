const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

// Create a review
exports.createReview = async (req, res) => {
  try {
    const { bookId, reviewText, rating } = req.body;
    const review = new Review({ book: bookId, reviewText, rating, user: req.user.id });

    await review.save();

    const book = await Book.findById(bookId);
    book.reviews.push(review._id);
    await book.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews by book
exports.getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate('user', 'username');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await review.remove();
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
