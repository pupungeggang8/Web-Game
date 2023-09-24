function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function twoRectCollide(center1, center2, size1, size2) {
    let distance = {x : Math.abs(center1.x - center2.x), y : Math.abs(center1.y - center2.y)}
    let sizeRange = {x : Math.abs(size1.x + size2.x) / 2, y : Math.abs(size1.y + size2.y) / 2}

    return distance.x < sizeRange.x || distance.y < sizeRange.y
}