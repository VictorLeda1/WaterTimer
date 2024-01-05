const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'gotas.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('WaterTimer')
    return tray
}

module.exports = createTray()