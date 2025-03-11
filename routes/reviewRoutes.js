const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.createReview);
router.get('/:bookId', reviewController.getReviewsByBook);
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;
