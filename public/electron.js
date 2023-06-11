const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
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

ipcMain.on("open-add-team", () => {
  mainWindow.webContents.send("open-add-team");
  console.log("Add Team:", team);
});

ipcMain.on("open-add-participant", (event, teams) => {
  mainWindow.webContents.send("open-add-participant", teams);
  console.log("Add Team:", team);
});
