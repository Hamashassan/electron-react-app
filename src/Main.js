import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  // const dispatch = useDispatch();
  // const teams = useSelector((state) => state.teams);
  const [participant, setParticipant] = useState([]);

  // const handleAddTeam = () => {
  //   // const { ipcRenderer, remote } = require("electron");

  //   dispatch({
  //     type: "ADD_TEAM",
  //     payload: { name: "Team Name", logo: "Team Logo" },
  //   });
  //   console.log("ipcRenderer", window);
  //   // window.ipcRenderer.send("open-add-team");
  // };

  const handleAddParticipant = () => {
    console.log("handleaddparticipants");
    window.ipcRenderer.send("open-participants");
  };

  window.ipcRenderer.on("participants", (result) => {
    console.log("result", result);
    setParticipant(result);
  });

  // const handleCreateRace = () => {
  //   window.ipcRenderer.send("open-create-race", teams);
  // };

  // const handleRaces = () => {
  //   window.ipcRenderer.send("open-races", teams);
  // };

  // const onPressAllRaces = () => {
  //   window.ipcRenderer.send("openAllRaces");
  // };

  const onPressRaces = () => {
    window.ipcRenderer.send("open-races");
  };

  const onPressScoreboard = () => {
    window.ipcRenderer.send("open-scoreboard");
  };

  return (
    <div>
      <h1>Welcome to the Racing App</h1>
      {/* <button onClick={handleAddTeam}>Add Team</button>
      <button onClick={handleCreateRace}>Create Race</button>
      <button onClick={handleRaces}>Races</button>
      <p>{participant?.participantName}</p> */}
      <button onClick={handleAddParticipant}>Participant</button>
      <button onClick={onPressRaces}>All Races</button>
      <button onClick={onPressScoreboard}>Scoreboard</button>
      <p>{participant?.participantName}</p>
      <p>{JSON.stringify(participant)}</p>
    </div>
  );
};

export default Main;
