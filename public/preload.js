const { contextBridge, ipcRenderer } = require('electron');

// Expose IPCRenderer to the renderer process
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  on: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args));
  },
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
});
