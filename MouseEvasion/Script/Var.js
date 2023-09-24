let canvas
let context

let gameInstance
let gameFramePrevious
let gameFrameCurrent
let delta

let scene = 'Title'
let state = ''

let selected = {
    file : -1,
}

let sessionVar = {

}

let player = {
    life : 3,
    lifeMax : 3,
    position : {
        x : -1,
        y : -1,
    }
}

let mouse = {
    current : {
        x : -1,
        y : -1,
    }
}