import React from "react";

const OfficeList = () => {
  // Office list
  const offices = [
    {
      name: "WeWork HQ",
      rent: 50000,
      address: "Bangalore, MG Road",
      image: "https://via.placeholder.com/250x150?text=WeWork+HQ",
    },
    {
      name: "Regus Tech Park",
      rent: 65000,
      address: "Pune, Hinjewadi",
      image: "https://via.placeholder.com/250x150?text=Regus+Tech+Park",
    },
    {
      name: "Cowork Arena",
      rent: 40000,
      address: "Hyderabad, Hitech City",
      image: "https://via.placeholder.com/250x150?text=Cowork+Arena",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* JSX heading element */}
      <h1>🏢 Office Space Rental Listings</h1>

      {/* Loop through offices */}
      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          {/* Image as attribute */}
          <img src={office.image} alt={office.name} width="250" height="150" />

          {/* JSX with object data */}
          <h2>{office.name}</h2>
          <p>
            <strong>Address:</strong> {office.address}
          </p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
