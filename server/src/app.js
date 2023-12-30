const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const { getJson } = require('serpapi');

// Define a Mongoose model for Destinations
const Destination = mongoose.model('Destination', {
    name: String,
    location: String,
    imageUrl: String,
    price: Number
});

// Enable CORS
app.use(cors());

// Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/travel', {
mongoose.connect('mongodb://localhost:27017/travel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/api', require('./routes/api'));


app.get('/', (req, res) => {
    res.send('Hello from Traverse!')
})

// Fetch data from the SERP API and store it in the local database
const fetchDataAndStoreInDB = async () => {
    try {
        // Make a request to the SERP API
        const apiResponse = await getJson({
            engine: 'google',
            q: 'Popular Destinations',
            api_key: '0e44ac84f8f4b3560194faad8e8d83ab2f11ed81497c5ffc8749771c1de328bf',
        });

        // Extract the popular destinations from the SERP API response
        const popularDestinations = apiResponse['organic_results'];

        // Store the destinations in the local database
        await Destination.insertMany(popularDestinations);

        console.log('Data successfully fetched from SERP API and stored in the database');
    } catch (error) {
        console.error('Error fetching data from SERP API and storing in the database:', error);
        throw error;
    }
};

// Define an API endpoint to fetch destinations
app.get('/api/destinations', async (req, res) => {
    try {
        // Fetch destinations from the local database
        const destinations = await Destination.find();

        // If no data in the database, fetch from the SERP API and store
        if (destinations.length === 0) {
            await fetchDataAndStoreInDB();
            console.log('Data fetched from SERP API and stored in the database.');
        }

        // Send the destinations as the API response
        res.json(destinations);
    } catch (error) {
        console.error('Error handling /api/destinations request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});