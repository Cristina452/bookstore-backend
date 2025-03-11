const express = require('express');
const { getReviewsByBook, addReview, updateReview, deleteReview } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/book/:bookId', getReviewsByBook);
router.post('/', authMiddleware, addReview);
router.put('/:reviewId', authMiddleware, updateReview);
router.delete('/:reviewId', authMiddleware, deleteReview);

module.exports = router;
