import React from "react";
import "./styles.css";

import racesData from "./data";

function AllRaces() {
  const onPressStartRace = (data) => {
    window.ipcRenderer.send("open-battle", data);
  };

  const renderItem = (item, index) => {
    return (
      <div className="main-item">
        <p>{index + 1}.</p>
        <p className="paragraph-text">{item.name}</p>
        <button onClick={() => onPressStartRace(item)}>Start Race</button>
      </div>
    );
  };

  return (
    <div className="item">
      <p className="title">Races</p>
      {racesData.map(renderItem)}
    </div>
  );
}

export default AllRaces;
