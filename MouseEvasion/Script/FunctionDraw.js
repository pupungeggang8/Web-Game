function drawSceneInit() {
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.font = '32px neodgm'
    context.lineWidth = 2
    context.textAlign = 'left'
    context.textBaseline = 'top'

    context.clearRect(0, 0, 1024, 576)
}

function drawSaveFile(index) {
    context.strokeRect(UI.saveSelect.saveFileRect[index][0], UI.saveSelect.saveFileRect[index][1], UI.saveSelect.saveFileRect[index][2], UI.saveSelect.saveFileRect[index][3])
    context.fillText(`File ${index + 1}`, UI.saveSelect.saveFileTitle[index][0], UI.saveSelect.saveFileTitle[index][1])
    context.strokeRect(UI.saveSelect.buttonErase[index][0], UI.saveSelect.buttonErase[index][1], UI.saveSelect.buttonErase[index][2], UI.saveSelect.buttonErase[index][3])
    context.fillText(`Erase`, UI.saveSelect.textErase[index][0], UI.saveSelect.textErase[index][1])
    context.strokeRect(UI.saveSelect.buttonStart[index][0], UI.saveSelect.buttonStart[index][1], UI.saveSelect.buttonStart[index][2], UI.saveSelect.buttonStart[index][3])
    context.fillText(`Start`, UI.saveSelect.textStart[index][0], UI.saveSelect.textStart[index][1])
}

function drawLevel() {
    context.font = '16px neodgm'

    for (let i = 1; i < sessionVar[selected.file].level.length; i++) {
        context.strokeRect(Math.floor(dataLevel[i]['Position'][0] - levelCamera.x), Math.floor(dataLevel[i]['Position'][1] - levelCamera.y), 32, 32)
        context.fillText(`${dataLevel[i]['Name']}`, Math.floor(dataLevel[i]['Position'][0] - levelCamera.x), Math.floor(dataLevel[i]['Position'][1] + 40 - levelCamera.y))
    }

    context.font = '32px neodgm'
}

function drawGameUpperUI() {

}

function drawGameLowerUI() {
    context.font = '24px neodgm'

    if (pause === false) {
        context.fillText(`[z] Pause`, UI.game.lowerText[0], UI.game.lowerText[1])
    } else {
        context.fillText(`Paused : [z] Resume, [x] Back to level, [c] Back to title`, UI.game.lowerText[0], UI.game.lowerText[1])
    }

    context.font = '32px neodgm'
}

function drawField() {
    for (let i = 0; i < field.block.length; i++) {
        for (j = 0; j < field.block[i].length; j++) {
            if (field.block[i][j] > 0) {
                context.strokeRect(j * 32, i *32, 32, 32)
            }
        }
    }

    for (let i = 0; i < field.thing.length; i++) {

    }

    for (let i = 0; i < field.connection.length; i++) {
        context.strokeRect(field.connection[i][0], field.connection[i][1], field.connection[i][2], field.connection[i][3])
    }
}

function drawPlayer() {
    context.strokeRect(Math.floor(player.position.x - 12), Math.floor(player.position.y - 12), 24, 24)
}