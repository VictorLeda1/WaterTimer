const { BrowserWindow } = require('electron')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 250,
      height: 310,
      
      show: false,
      frame: false,
      resizable: false,
      fullscreen: false,
    })
  
    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    return mainWindow
  }

  module.exports = createWindow()