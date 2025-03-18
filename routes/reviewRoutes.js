const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Rotte per le recensioni
router.post('/', reviewController.addReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
