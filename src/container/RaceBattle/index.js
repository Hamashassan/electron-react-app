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
      {/* <p>hi</p> */}
      {/* {JSON.stringify(data)} */}
      {/* <button onClick={onPress}>Send data to scoreboard</button> */}

      <div className="participant">
        <p>Team</p>
        <p>Name</p>
      </div>
    </div>
  );
}

export default RaceBattle;
