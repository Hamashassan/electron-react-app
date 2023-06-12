import React, { useState } from "react";

function AddParticipant() {
  const [participantName, setParticipantName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [isTeamCaptain, setIsTeamCaptain] = useState(false);

  const handleNameChange = (event) => {
    setParticipantName(event.target.value);
  };

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleCaptainChange = (event) => {
    setIsTeamCaptain(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any further actions with participantName, selectedTeam, and isTeamCaptain
    console.log("Participant Name:", participantName);
    console.log("Selected Team:", selectedTeam);
    console.log("Is Team Captain:", isTeamCaptain);
    window.ipcRenderer.send("submit-add-participant", {
      participantName,
      selectedTeam,
      isTeamCaptain,
    });
    // Reset the form
    setParticipantName("");
    setSelectedTeam("");
    setIsTeamCaptain(false);
  };

  return (
    <div>
      <h2>Add Participants</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="participantName">Participant Name:</label>
          <input
            type="text"
            id="participantName"
            value={participantName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="selectedTeam">Select Team:</label>
          <select
            id="selectedTeam"
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            <option value="">Select a team</option>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
          </select>
        </div>
        <div>
          <label htmlFor="isTeamCaptain">
            <input
              type="checkbox"
              id="isTeamCaptain"
              checked={isTeamCaptain}
              onChange={handleCaptainChange}
            />
            Team Captain
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddParticipant;
