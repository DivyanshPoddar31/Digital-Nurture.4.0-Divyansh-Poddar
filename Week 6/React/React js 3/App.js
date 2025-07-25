import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <h1>Student Management Portal - Score Calculator</h1>
      <CalculateScore name="Rahul" school="DPS" total={450} goal={500} />
    </div>
  );
}

export default App;
