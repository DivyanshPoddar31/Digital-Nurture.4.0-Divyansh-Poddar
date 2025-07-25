import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ name, school, total, goal }) {
  const average = ((total / goal) * 100).toFixed(2);

  return (
    <div className="score-card">
      <h2>Score Details</h2>
      <p>
        <strong>Student Name:</strong> {name}
      </p>
      <p>
        <strong>School:</strong> {school}
      </p>
      <p>
        <strong>Total Score:</strong> {total}
      </p>
      <p>
        <strong>Goal:</strong> {goal}
      </p>
      <p>
        <strong>Average Score:</strong> {average}%
      </p>
    </div>
  );
}

export default CalculateScore;
