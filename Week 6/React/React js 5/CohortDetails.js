import React from "react";
import "./CohortDetails.css"; // ✅ Regular CSS import

function CohortDetails({ cohort }) {
  const { name, track, startDate, status, coach, trainer } = cohort;
  const isOngoing = status.toLowerCase() === "ongoing";

  return (
    <div className="box">
      <h3 style={{ color: isOngoing ? "green" : "blue" }}>
        {name} - {track}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Coach</dt>
        <dd>{coach}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
