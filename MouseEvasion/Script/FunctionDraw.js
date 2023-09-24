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