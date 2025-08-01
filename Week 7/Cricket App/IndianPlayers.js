import React from "react";

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Rahul", "Dhoni", "Bumrah", "Gill"];
  const evenTeam = ["Rohit", "Hardik", "Jadeja", "Shami", "Ashwin", "Kohli"];

  // Destructuring example
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merge arrays
  const T20players = ["Suryakumar", "Ishan", "Pant"];
  const RanjiTrophy = ["Pujara", "Rahane", "Vihari"];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
