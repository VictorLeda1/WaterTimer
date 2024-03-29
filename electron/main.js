// main.js

// Modules to control application life and create native browser window
const { app } = require('electron')
const controlWindow = require('./ControlWindow.js')

function App() {
  const mainWindow = require('./CreateWindow')
  const tray = require('./Tray.js')

  const { toggle } = controlWindow(mainWindow, tray)

  tray.on('click', toggle)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(App)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.