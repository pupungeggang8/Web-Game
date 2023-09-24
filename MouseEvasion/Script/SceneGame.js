function loopGame() {   
    if (pause === false) {
        if (state === '') {
            movePlayer()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()

    drawField()
    drawPlayer()
    drawGameUpperUI()
    drawGameLowerUI()
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (state === '') {
                checkConnection()
            }
        }
    }
}

function mouseMoveGame(x, y) {
    player.position.x = x
    player.position.y = y
}

function keyUpGame(key) {
    if (pause === false) {
        if (key === 'z') {
            pause = true
        }
    } else if (pause === true) {
        if (key === 'z') {
            pause = false
        } else if (key === 'x') {
            scene = 'Level'
            state = ''
            pause = false
            canvas.style.cursor = 'default';
        } else if (key === 'c') {
            scene = 'Title'
            state = ''
            pause = false
            canvas.style.cursor = 'default';
        }
    }
}