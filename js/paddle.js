'use strict';

export class Paddle {

    context;

    /* x軸 */
    x;

    /* y軸 */
    y;

    /* 幅 */
    width;

    /* 高さ */
    height;

    
    dx = 0;


    speed;

    constructor (context , x , y , width , height , speed) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // this.dx = dx;
        this.speed = speed;
    }

    /* 移動する */
    move() { this.x += this.dx; }

    /* 描画する */
    draw() {
        this.context.beginPath();
        this.context.rect(this.x , this.y , this.width , this.height);
        this.context.fillStyle = "green";
        this.context.fill();
        this.context.closePath();
    }
}