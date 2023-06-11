import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
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
        console.log("handleaddparticipants");
        window.ipcRenderer.send("open-add-participant", teams);
    };

    return (
        <div>
            <h1>Welcome to the Racing App</h1>
            <button onClick={handleAddTeam}>Add Team</button>
            <button onClick={handleAddParticipant}>Add Participant</button>
        </div>
    );
};

export default Main;
