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
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h2>Cohort Tracker</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
