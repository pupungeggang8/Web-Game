function loopLevel() {
    displayLevel()
}

function displayLevel() {
    drawSceneInit()

    context.fillText(`Select Level`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    drawLevel()
}

function mouseUpLevel(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.buttonBack)) {
                scene = 'SaveSelect'
                state = ''
            } else {
                for (let i = 1; i < sessionVar[selected.file].level.length; i++) {
                    if (pointInsideRect(x, y, dataLevel[i]['Position'][0] + levelCamera.x, dataLevel[i]['Position'][1] + levelCamera.y, 32, 32)) {
                        if (sessionVar[selected.file].level[i] > 0) {
                            scene = 'Game'
                            state = ''
                            canvas.style.cursor = 'none';
                            selected.level = i
                            levelLoad(selected.level)
                            stageLoad(selected.level, 0)
                            player.position.x = mouse.current.x
                            player.position.y = mouse.current.y
                            break
                        }
                    }
                }
            }
        }
    }
}