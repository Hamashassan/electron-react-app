import React, { useState } from "react";

function AllRaces() {
  const [races, setRaces] = useState([
    {
      id: 1,
      name: "Race 1",
      participants: ["Participant A", "Participant B", "Participant C"],
    },
    {
      id: 2,
      name: "Race 2",
      participants: ["Participant X", "Participant Y", "Participant Z"],
    },
    {
      id: 3,
      name: "Race 3",
      participants: ["Participant P", "Participant Q", "Participant R"],
    },
  ]);
  const [currentRace, setCurrentRace] = useState(null);

  const handleStartRace = (raceId) => {
    const selectedRace = races.find((race) => race.id === raceId);
    setCurrentRace(selectedRace);
  };

  if (currentRace) {
    return <CurrentRace race={currentRace} />;
  }

  return (
    <div>
      <h2>All Races</h2>
      {races.map((race) => (
        <div key={race.id}>
          <h3>{race.name}</h3>
          <button onClick={() => handleStartRace(race.id)}>Start Race</button>
        </div>
      ))}
    </div>
  );
}

function CurrentRace({ race }) {
  return (
    <div>
      <h2>{race.name}</h2>
      <div>
        <h3>Participants</h3>
        {race.participants.map((participant) => (
          <div key={participant}>{participant}</div>
        ))}
      </div>
    </div>
  );
}

export default AllRaces;
