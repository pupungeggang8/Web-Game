let canvas
let context

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Title'
let state = ''
let pause = false

let mouse = {
    current : {
        x : -1,
        y : -1,
    }
}

let selected = {
    file : -1,
    level : -1,
}

let sessionVar = {

}

let levelCamera = {
    x : -1,
    y : -1,
}

let player = {
    life : 3,
    lifeMax : 3,
    position : {
        x : -1,
        y : -1,
    },
    speed : 240,
}

let levelAll = {}

let field = {
    stage : -1,
    block : [],
    thing : [],
    connection : [],
}