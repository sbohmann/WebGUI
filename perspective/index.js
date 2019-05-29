import {NeighboringPoints} from "./neighboring-points.js"

window.onload = init

function init() {
    console.log("init")
}

new NeighboringPoints(proj(1, 2), proj(2, 2), proj(1, 1))

function proj(x, y) {
    return {x: x, y: y}
}
