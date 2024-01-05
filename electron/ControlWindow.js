function ControlWindow(mainWindow, tray) {
    function toggle() {
        if(mainWindow.isVisible()) {
            mainWindow.hide() 
        } else {
            show()
        }
    }

    function show() {
        const {x, y} = getPosition()
        mainWindow.setPosition(x, y, false)
        mainWindow.show()
        mainWindow.focus()
    }

    function getPosition() {
        // const winBounds = mainWindow.getBounds()
        // const trayBounds = tray.getBounds()

        const x = 1640
        const y = 15

        return {x, y}
    }

    return {
        toggle
    }
}

module.exports = ControlWindow