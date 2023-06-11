import React from "react";

function Scoreboard() {
  const teams = [
    { id: 1, name: "Team A", points: 10 },
    { id: 2, name: "Team B", points: 20 },
    { id: 3, name: "Team C", points: 15 },
    { id: 4, name: "Team D", points: 12 },
    { id: 5, name: "Team E", points: 18 },
  ];

  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
