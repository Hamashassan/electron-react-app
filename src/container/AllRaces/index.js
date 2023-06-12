import React from "react";
import "./styles.css";

const races = [
  {
    name: "Race 1",
    participants: [
      {
        name: "Hamas",
        team: "Noorabad Lions",
        teamId: 1,
      },
      {
        name: "Ali",
        team: "Noorabad Lions 2",
        teamId: 1,
      },
      {
        name: "Faizan",
        team: "Noorabad Lions 3",
        teamId: 1,
      },
      {
        name: "Arham",
        team: "Noorabad Lions 4",
        teamId: 1,
      },
      {
        name: "Kamal",
        team: "Noorabad Lions 5",
        teamId: 1,
      },
    ],
  },
  {
    name: "Race 2",
    participants: [
      {
        name: "Hamas",
        team: "Noorabad Lions",
        teamId: 1,
      },
      {
        name: "Ali",
        team: "Noorabad Lions 2",
        teamId: 1,
      },
      {
        name: "Faizan",
        team: "Noorabad Lions 3",
        teamId: 1,
      },
      {
        name: "Arham",
        team: "Noorabad Lions 4",
        teamId: 1,
      },
      {
        name: "Kamal",
        team: "Noorabad Lions 5",
        teamId: 1,
      },
    ],
  },
  {
    name: "Race 3",
    participants: [
      {
        name: "Hamas",
        team: "Noorabad Lions",
        teamId: 1,
      },
      {
        name: "Ali",
        team: "Noorabad Lions 2",
        teamId: 1,
      },
      {
        name: "Faizan",
        team: "Noorabad Lions 3",
        teamId: 1,
      },
      {
        name: "Arham",
        team: "Noorabad Lions 4",
        teamId: 1,
      },
      {
        name: "Kamal",
        team: "Noorabad Lions 5",
        teamId: 1,
      },
    ],
  },
  {
    name: "Race 4",
    participants: [
      {
        name: "Hamas",
        team: "Noorabad Lions",
        teamId: 1,
      },
      {
        name: "Ali",
        team: "Noorabad Lions 2",
        teamId: 1,
      },
      {
        name: "Faizan",
        team: "Noorabad Lions 3",
        teamId: 1,
      },
      {
        name: "Arham",
        team: "Noorabad Lions 4",
        teamId: 1,
      },
      {
        name: "Kamal",
        team: "Noorabad Lions 5",
        teamId: 1,
      },
    ],
  },
  {
    name: "Race 5",
    participants: [
      {
        name: "Hamas",
        team: "Noorabad Lions",
        teamId: 1,
      },
      {
        name: "Ali",
        team: "Noorabad Lions 2",
        teamId: 1,
      },
      {
        name: "Faizan",
        team: "Noorabad Lions 3",
        teamId: 1,
      },
      {
        name: "Arham",
        team: "Noorabad Lions 4",
        teamId: 1,
      },
      {
        name: "Kamal",
        team: "Noorabad Lions 5",
        teamId: 1,
      },
    ],
  },
];

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
      <p>All Races</p>
      {races.map(renderItem)}
    </div>
  );
}

export default AllRaces;
