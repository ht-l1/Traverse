import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Destination from './components/Destination'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Declare state for the destination data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch all destinations
    fetch('http://localhost:5000/api/destinations')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Update state or dispatch actions with the fetched data
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
        // Handle the error (set state, show an error message, etc.)
      });


    // Book a destination
    fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinationId: '123',
        userId: '456',
        bookingDate: '2023-01-01',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error booking destination:', error);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      {/* <Destination /> */}
      <Destination destinations={data} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
