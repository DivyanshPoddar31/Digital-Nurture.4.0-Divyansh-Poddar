import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 80 },
    { name: "Rohit", score: 65 },
    { name: "Rahul", score: 45 },
    { name: "Hardik", score: 90 },
    { name: "Dhoni", score: 55 },
    { name: "Jadeja", score: 85 },
    { name: "Bumrah", score: 75 },
    { name: "Shami", score: 30 },
    { name: "Gill", score: 95 },
    { name: "Kohli", score: 100 },
    { name: "Ashwin", score: 60 },
  ];

  // Filtering players with score < 70
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
