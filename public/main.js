const { app, BrowserWindow } = require('electron');

require("@electron/remote/main").initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      enableRemoteModule: true
    }
  });

  win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

// for mac OS X - Quit when all windows are closed

app.on('window-all-closed', function () {
  if(process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if(BrowserWindow.getAllWindows().length === 0) createWindow();
})