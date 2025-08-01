import React from "react";
import FlightList from "./FlightList";

const UserPage = () => {
  return (
    <div>
      <h1>Welcome, User ✅</h1>
      <p>You can now book flight tickets.</p>
      <FlightList isLoggedIn={true} />
    </div>
  );
};

export default UserPage;
