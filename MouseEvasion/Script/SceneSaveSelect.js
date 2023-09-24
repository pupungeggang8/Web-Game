function loopSaveSelect() {
    displaySaveSelect()
}

function displaySaveSelect() {
    drawSceneInit()

    context.fillText(`Select save file.`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    for (let i = 0; i < 3; i++) {
        drawSaveFile(i)
    }
}

function mouseUpSaveSelect(x, y, button) {
    if (button === 0) {
        if (pointInsideRectArray(x, y, UI.buttonBack)) {
            scene = 'Title'
            state = ''
        }

        for (let i = 0; i < 3; i++) {
            if (pointInsideRectArray(x, y, UI.saveSelect.buttonStart[i])) {
                scene = 'Level'
                state = ''
                selected.file = i
                levelCamera.x = 0
                levelCamera.y = 0
            } else if (pointInsideRectArray(x, y, UI.saveSelect.buttonErase[i])) {
                
            }
        }
    }
}