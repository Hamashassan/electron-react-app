import React, { useState } from "react";
import "./styles.css";

const initalData = [
  {
    image: "",
    team: "Noorabad lions",
    win: 0,
    loss: 0,
    points: 20,
    racesPlayed: 0,
    color: "yellow",
    id: 1,
  },
  {
    image: "",
    team: "Noorabad Panthers",
    win: 0,
    loss: 0,
    points: 0,
    racesPlayed: 0,
    color: "#99cc33",
    id: 2,
  },
  {
    image: "",
    team: "Noorabad Eagles",
    win: 0,
    loss: 0,
    points: 0,
    racesPlayed: 0,
    color: "#ffcc00",
    id: 3,
  },
  {
    image: "",
    team: "Noorabad Sharks",
    win: 0,
    loss: 0,
    points: 0,
    racesPlayed: 0,
    color: "#0066cc",
    id: 4,
  },
  {
    image: "",
    team: "Noorabad Markhor",
    win: 0,
    loss: 0,
    points: 0,
    racesPlayed: 0,
    color: "#ff0000",
    id: 5,
  },
];

function Scoreboard() {
  const [data, setData] = useState(initalData);
  const [data2, setDat2] = useState({});

  window.ipcRenderer.removeAllListeners('race-result');

  window.ipcRenderer.on("race-result", (result) => {
    console.log("race-result", result);

    const newData = [...data];
    const foundIndex = newData.findIndex((x) => x.id == result.winner);
    console.log("foundIndex", foundIndex);
    newData[foundIndex] = {
      ...newData[foundIndex],
      points: newData[foundIndex].points + result.winnerPoint,
    };

    setData(newData);

    setDat2(newData);
  });

  return (
    <div>
      <p className="title">Scoreboard</p>
      <div className="container">
        <p>Position</p>
        <p style={{ width: 150 }}>Team</p>
        <p>Race</p>
        <p>Win</p>
        <p>Loss</p>
        <p>Points</p>
      </div>
      {data
        .sort((a, b) => b.points - a.points)
        .map((item) => {
          return (
            <div className="container" style={{ backgroundColor: item.color }}>
              <p>1</p>
              <p style={{ width: 150 }}>{item.team}</p>
              <p>{item.racesPlayed}</p>
              <p>{item.win}</p>
              <p>{item.loss}</p>
              <p>{item.points}</p>
            </div>
          );
        })}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default Scoreboard;
