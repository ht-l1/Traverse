const Destination = require('../models/destinationModel');

const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const bookDestination = async (req, res) => {
    // Add booking logic here
    // Retrieve data from req.body and save it to the database
    // const { destinationId, userId, bookingDate } = req.body;
    // Save the booking data to the database

    res.status(200).json({ message: 'Booking successful!' });
};

module.exports = {
    getAllDestinations,
    bookDestination,
};