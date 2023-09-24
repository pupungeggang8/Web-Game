function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Mouse Evasion`, UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonEditor[0], UI.title.buttonEditor[1], UI.title.buttonEditor[2], UI.title.buttonEditor[3])
    context.fillText(`Editor`, UI.title.textEditor[0], UI.title.textEditor[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText(`Erase Data`, UI.title.textErase[0], UI.title.textErase[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                scene = 'SaveSelect'
                state = ''
            } else if (pointInsideRectArray(x, y, UI.title.buttonEditor)) {
                scene = 'Editor'
                state = ''
            } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                resetData()
            }
        }
    }
}