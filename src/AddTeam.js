import React, { useState } from "react";

function AddTeam() {
  const [teamName, setTeamName] = useState("");
  const [teamLogo, setTeamLogo] = useState(null);

  const handleNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setTeamLogo(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any further actions with teamName and teamLogo
    console.log("Team Name:", teamName);
    console.log("Team Logo:", teamLogo);
    // Reset the form
    setTeamName("");
    setTeamLogo(null);
  };

  return (
    <div>
      <h2>Add Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="teamLogo">Team Logo:</label>
          <input
            type="file"
            id="teamLogo"
            accept=".jpg, .jpeg, .png"
            onChange={handleLogoChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {teamLogo && <img src={teamLogo} alt="Team Logo" />}
    </div>
  );
}

export default AddTeam;
