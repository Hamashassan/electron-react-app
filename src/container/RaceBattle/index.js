import React, { useState, useEffect } from "react";
import "./styles.css";

function RaceBattle() {
  const [data, setData] = useState({});

  useEffect(() => {
    window.ipcRenderer.on("race-data", (result) => {
      console.log("race-data", result);
      setData(result);
    });
  }, []);

  console.log("window", window);

  const onPress = () => {
    window.ipcRenderer.send("send-race-result", {
      winner: 1,
      runnerUp: 2,
      winnerPoint: 10,
      runnerUpPoint: 5,
    });
  };

  return (
    <div>
      <p className="race-name">{data.name}</p>
      {/* {JSON.stringify(data)} */}
      {/* <button onClick={onPress}>Send data to scoreboard</button> */}

      <div className="team-container">
        {data?.participants?.map((item) => {
          let color;

          if (item.teamId === 1) {
            color = "yellow";
          } else if (item.teamId === 2) {
            color = "#99cc33";
          } else if (item.id === 3) {
            color = "#ffcc00";
          } else if (item.teamId === 4) {
            color = "#0066cc";
          } else if (item.teamId === 5) {
            color = "#ff0000";
          }

          return (
            <div
              onClick={onPress}
              className="participant"
              style={{ backgroundColor: color }}
            >
              <img
                src="/profile_user.jpeg"
                alt="image"
                className="user-image"
              />
              <p>{item.name}</p>
              <p>{item.team}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RaceBattle;
