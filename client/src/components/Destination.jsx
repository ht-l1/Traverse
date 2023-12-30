import React from 'react'

const Destination = ({ destinations }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-4">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {destinations.map((destination) => (
                    <div key={destination.id} className="bg-white p-4 rounded-lg shadow">
                        <img
                            src={destination.imageUrl}
                            alt={destination.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                        <p className="text-gray-600 mb-2">{destination.location}</p>
                        <p className="text-green-600 font-semibold">${destination.price} per night</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Destination