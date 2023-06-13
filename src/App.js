import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import AddParticipant from "./AddParticipant";
import AllRaces from "./container/AllRaces";
import RaceBattle from "./container/RaceBattle";
import Scoreboard from "./container/Scoreboard";
import Participants from "./container/Participants";

const App = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  const handleAddTeam = () => {
    // const { ipcRenderer, remote } = require("electron");

    dispatch({
      type: "ADD_TEAM",
      payload: { name: "Team Name", logo: "Team Logo" },
    });
    console.log("ipcRenderer", window);
    // window.ipcRenderer.send("open-add-team");
  };

  const handleAddParticipant = () => {
    window.ipcRenderer.send("open-add-participant", teams);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-participant" element={<AddParticipant />} />
        <Route path="/races" element={<AllRaces />} />
        <Route path="/battle" element={<RaceBattle />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </Router>
  );
};

export default App;
