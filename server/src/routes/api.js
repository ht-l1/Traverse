const express = require('express');
const router = express.Router();
const { getAllDestinations, bookDestination } = require('../controllers/destinationController');

// Get all destinations
router.get('/destinations', getAllDestinations);

// Book a destination
router.post('/book', bookDestination);

module.exports = router;