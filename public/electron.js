const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const isDev = require("electron-is-dev");
const path = require("path");
const url = require('url');
let mainWindow;
let addparticipantWindow;
let createRaceWindow;

let racesWindow;
let scoreboardWindow;
let raceBattleWindow;
let participantsWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function createaddparticipantWindow() {
  addparticipantWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  addparticipantWindow.loadURL(
    isDev
      ? "http://localhost:3000/add-participant"
      : `file://${path.join(__dirname, "../build/index.html/#/add-participant")}`
  );

  addparticipantWindow.on("closed", () => {
    addparticipantWindow = null;
  });
}

// function createaddRaceWindow() {
//   createRaceWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       enableRemoteModule: true,
//       contextIsolation: true,
//       preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
//     },
//   });

//   createRaceWindow.loadURL(
//     isDev
//       ? "http://localhost:3000/create-race"
//       : `file://${path.join(__dirname, "../build/index.html/add-participant")}`
//   );

//   createRaceWindow.on("closed", () => {
//     createRaceWindow = null;
//   });
// }

// ipcMain.on("open-add-team", (team) => {
//   mainWindow.webContents.send("open-add-team");
//   console.log("Add Team:", team);
// });

ipcMain.on("submit-add-participant", (event, team) => {
  // mainWindow.webContents.send("open-add-team");
  console.log("submit-add-participant", team);
  mainWindow.webContents.send("participants", team);
});

ipcMain.on("open-add-participant", (event, teams) => {
  mainWindow.webContents.send("open-add-participant", teams);
  createaddparticipantWindow();
  console.log("Add Team:", teams);
});

// ipcMain.on("open-create-race", (event, teams) => {
//   mainWindow.webContents.send("open-create-race", teams);
//   createaddRaceWindow();
//   console.log("Add Team:", teams);
// });

// ipcMain.on("open-races", (event, teams) => {
//   mainWindow.webContents.send("open-races", teams);
//   createaddRaceWindow();
//   console.log("Add Team:", teams);
// });

////////////////////////////////////////////////////////////////////////////////////////////

function createRacesWindow() {
  racesWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  racesWindow.loadURL(
    isDev
      ? "http://localhost:3000/races"
      : `file://${path.join(__dirname, "../build/index.html/#/add-participant")}`
  );

  racesWindow.on("closed", () => {
    addparticipantWindow = null;
  });
}

ipcMain.on("open-races", (event, teams) => {
  // mainWindow.webContents.send("open-races", teams);
  createRacesWindow();
  // console.log("Add Team:", teams);
});

function createsSoreboardWindow() {
  scoreboardWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  scoreboardWindow.loadURL(
    isDev
      ? "http://localhost:3000/#/scoreboard"
      : `file://${__dirname}/index.html#/scoreboard`);


  scoreboardWindow.on("closed", () => {
    addparticipantWindow = null;
  });
}

ipcMain.on("open-scoreboard", (event, teams) => {
  // mainWindow.webContents.send("open-races", teams);
  createsSoreboardWindow();
  // console.log("Add Team:", teams);
});

function createRaceBattleWindow() {
  raceBattleWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  raceBattleWindow.loadURL(
    isDev
      ? "http://localhost:3000/battle"
      : `file://${path.join(__dirname, "../build/index.html/#/battle")}`
  );

  raceBattleWindow.on("closed", () => {
    raceBattleWindow = null;
  });
}

ipcMain.on("open-battle", (event, data) => {
  createRaceBattleWindow();
  console.log("data", data);
  // console.log("raceBattleWindow", mainWindow.webContents);
  raceBattleWindow.webContents.on("did-finish-load", (event) => {
    raceBattleWindow.webContents.send("race-data", data);
  });
  // console.log("Add Team:", teams);
});

ipcMain.on("send-race-result", (event, data) => {
  // mainWindow.webContents.send("open-add-team");
  console.log("race-result", data);
  scoreboardWindow.webContents.send("race-result", data);
});

function createParticipantsWindow() {
  participantsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Path to the preload.js file
    },
  });

  participantsWindow.loadURL(
    isDev
      ? "http://localhost:3000/participants"
      : `file://${path.join(__dirname, "../build/index.html/#/participants")}`
  );

  participantsWindow.on("closed", () => {
    raceBattleWindow = null;
  });
}

ipcMain.on("open-participants", (event, data) => {
  createParticipantsWindow();
});
