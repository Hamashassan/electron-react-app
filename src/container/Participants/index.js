import React from "react";
import "./styles.css";
import participantsData from "./data";

// const participants = [{ name: "Hamas" }];

function Participants() {
  //   const onPressStartRace = (data) => {
  //     window.ipcRenderer.send("open-battle", data);
  //   };

  const renderItem = (item, index) => {
    let color;

    if (item.id === 1) {
      color = "yellow";
    } else if (item.id === 2) {
      color = "#99cc33";
    } else if (item.id === 3) {
      color = "#ffcc00";
    } else if (item.id === 4) {
      color = "#0066cc";
    } else if (item.id === 5) {
      color = "#ff0000";
    }

    return (
      <div className="main-item" style={{ backgroundColor: color }}>
        <p>{index + 1}.</p>
        <p className="paragraph-text">{item.name}</p>
        <p className="paragraph-text">{item.team}</p>
      </div>
    );
  };

  return (
    <div className="item">
      <p className="title">All Participants</p>

      <div className="main-item">
        <p>No.</p>
        <p className="paragraph-text">Name</p>
        <p className="paragraph-text">Team</p>
      </div>
      {participantsData.map(renderItem)}
    </div>
  );
}

export default Participants;
