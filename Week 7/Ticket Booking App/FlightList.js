import React from "react";

const flights = [
  { id: 1, name: "Indigo 6E-501", from: "Delhi", to: "Mumbai", price: 4500 },
  {
    id: 2,
    name: "Air India AI-202",
    from: "Bangalore",
    to: "Chennai",
    price: 3200,
  },
  {
    id: 3,
    name: "SpiceJet SG-305",
    from: "Kolkata",
    to: "Hyderabad",
    price: 3900,
  },
];

const FlightList = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>✈️ Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id} style={{ marginBottom: "10px" }}>
            {flight.name} - {flight.from} to {flight.to} - ₹{flight.price}
            {isLoggedIn && (
              <button style={{ marginLeft: "10px" }}>Book Ticket</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
