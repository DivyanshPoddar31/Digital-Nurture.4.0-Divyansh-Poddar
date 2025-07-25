import React from "react";
import CohortDetails from "./components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "INTADMDF10",
      track: ".NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
    },
    {
      name: "ADM21JF014",
      track: "Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
    },
    {
      name: "CDBJF21025",
      track: "Java FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#2e2e2e",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "black" }}>Cohorts Details</h2>
        {cohorts.map((c, i) => (
          <CohortDetails key={i} cohort={c} />
        ))}
      </div>
    </div>
  );
}

export default App;
