import React, { useState } from "react";

function CreateRace() {
  const [raceName, setRaceName] = useState("");
  const [teamParticipants, setTeamParticipants] = useState({
    Team1: "",
    Team2: "",
    Team3: "",
    Team4: "",
    Team5: "",
  });

  const handleNameChange = (event) => {
    setRaceName(event.target.value);
  };

  const handleParticipantChange = (event) => {
    const { name, value } = event.target;
    setTeamParticipants((prevParticipants) => ({
      ...prevParticipants,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any further actions with raceName and teamParticipants
    console.log("Race Name:", raceName);
    console.log("Team Participants:", teamParticipants);
    // Reset the form
    setRaceName("");
    setTeamParticipants({
      Team1: "",
      Team2: "",
      Team3: "",
      Team4: "",
      Team5: "",
    });
  };

  return (
    <div>
      <h2>Create Race</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="raceName">Race Name:</label>
          <input
            type="text"
            id="raceName"
            value={raceName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <h3>Team Participants</h3>
          <div>
            <label htmlFor="team1">Team 1:</label>
            <input
              type="text"
              id="team1"
              name="Team1"
              value={teamParticipants.Team1}
              onChange={handleParticipantChange}
            />
          </div>
          <div>
            <label htmlFor="team2">Team 2:</label>
            <input
              type="text"
              id="team2"
              name="Team2"
              value={teamParticipants.Team2}
              onChange={handleParticipantChange}
            />
          </div>
          <div>
            <label htmlFor="team3">Team 3:</label>
            <input
              type="text"
              id="team3"
              name="Team3"
              value={teamParticipants.Team3}
              onChange={handleParticipantChange}
            />
          </div>
          <div>
            <label htmlFor="team4">Team 4:</label>
            <input
              type="text"
              id="team4"
              name="Team4"
              value={teamParticipants.Team4}
              onChange={handleParticipantChange}
            />
          </div>
          <div>
            <label htmlFor="team5">Team 5:</label>
            <input
              type="text"
              id="team5"
              name="Team5"
              value={teamParticipants.Team5}
              onChange={handleParticipantChange}
            />
          </div>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateRace;
