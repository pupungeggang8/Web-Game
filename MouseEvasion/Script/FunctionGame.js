function playerMove() {
    
}

function stageLoad(level, stage) {
    field = JSON.parse(JSON.stringify(dataStage[level][stage]))
    field.stage = stage
}