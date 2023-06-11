import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Main';
import AddParticipant from "./AddParticipant";

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
      </Routes>
    </Router>
  );
};

export default App;
