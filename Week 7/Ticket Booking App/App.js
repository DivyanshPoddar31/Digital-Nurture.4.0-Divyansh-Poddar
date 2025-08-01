import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>🎟️ Ticket Booking App</h1>

      {/* Login/Logout toggle button */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />

      {/* Conditionally render pages */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
