const express = require('express');
const { addReview } = require('../controllers/reviewController');
const { verifyToken } = require('../config/jwt');

const router = express.Router();

router.post('/', verifyToken, addReview);

module.exports = router;
