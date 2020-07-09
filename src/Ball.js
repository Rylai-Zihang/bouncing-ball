import * as PIXI from "pixi.js";
// 初始化
const ball = new PIXI.Application({
    width: 1440,
    height: 900,
    backgroundColor: 0xb2ebe9
});

document.body.appendChild(ball.view);

export function getCanvasRootContainer() {
    return ball.stage;
}

export function getGame() {
    return ball;
}
