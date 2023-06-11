
const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;
let addparticipantWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
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
      : `file://${path.join(__dirname, "../build/index.html/add-participant")}`
  );

  addparticipantWindow.on("closed", () => {
    addparticipantWindow = null;
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

ipcMain.on("open-add-team", (team) => {
  mainWindow.webContents.send("open-add-team");
  console.log("Add Team:", team);
});

ipcMain.on("submit-add-participant", (event, team) => {
  // mainWindow.webContents.send("open-add-team");
  console.log("submit-add-participant", team);
});

ipcMain.on("open-add-participant", (event, teams) => {
  mainWindow.webContents.send("open-add-participant", teams);
  createaddparticipantWindow();
  console.log("Add Team:", teams);
});
