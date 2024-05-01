// js/block.js
'use strict';

export class Block {
    context;
    /* x座標 */
    x;
    /* y座標 */
    y;
    /* 幅 */
    width;
    /* 高さ */
    height;
    /* 表示フラグ */
    status = true;
    /* 得点 */
    static POINT = 10;

    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    getPoint() {
        return Block.POINT;
    }

    

    draw() {
        if (this.status === true) {

            this.context.fillStyle = "#a47f61";
            this.context.fillRect(this.x, this.y, this.width, this.height);

        }

    }
}

export class HardBlock extends Block {
    
    static POINT = 50;
    
    hp = 3;

    constructor(context, x, y, width, hright) {
        super(context, x, y, width, hright);
    }

    getPoint() {
        return HardBlock.POINT;
    }

    /* 描画する */
    draw() {

        if (this.status === true) {

            // ブロックを描画する
            this.context.fillStyle = "#D2691E";
            this.context.fillRect(this.x, this.y, this.width, this.height);

        }
    }
}