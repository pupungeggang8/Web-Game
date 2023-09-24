function movePlayer() {
    /*
    let difference = {x : mouse.current.x - player.position.x, y : mouse.current.y - player.position.y}
    let norm = Math.sqrt(Math.pow(difference.x, 2) + Math.pow(difference.y, 2))

    if (norm > 10) {
        let velocity = {x : difference.x / norm * player.speed * delta / 1000, y : difference.y / norm * player.speed * delta / 1000}

        player.position.x += velocity.x
        player.position.y += velocity.y
    }
    */

    //player.position.x = mouse.current.x
    //player.position.y = mouse.current.y
}

function moveThing() {
    
}

function levelLoad(level) {
    field = JSON.parse(JSON.stringify(dataStage[level]))
}

function stageLoad(level, stage) {
    field = dataStage[level][stage]
    field.stage = stage
}

function checkConnection() {
    for (let i = 0; i < field.connection.length; i++) {
        let connectionCenter = {x : field.connection[i][0] - field.connection[i][2] / 2, y : field.connection[i][1] - field.connection[i][3] / 2}
        let connectionRect = {x : field.connection[i][0], y : field.connection[i][1]}

        if (twoRectCollide(player.position, connectionCenter, {x : 24, y : 24}, connectionRect)) {
            field.stage = field.connection[i][4]
            stageLoad(selected.level, field.stage)
            break
        }
    }
}