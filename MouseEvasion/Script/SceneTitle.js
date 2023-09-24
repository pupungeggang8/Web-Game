function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Mouse Evasion`, UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                scene = 'SaveSelect'
                state = ''
            }
        }
    }
}