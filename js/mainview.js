// mainview.js
'use strict';

// view.jsからViewクラスをimport
import { View } from "./view.js";

// export : 外部からクラス内にアクセスできる指定
export class MainView extends View {
    constructor(context) {
        super(context);
    }

    /* プレイヤーのキーアクションを実行する */
    executePlayerAction(key) {
        
        
        if(key["Enter"] === true) {
            this.isVisible = false;
        }
    }

    /* 描画する */
    draw() {

        //タイトルを描画する
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillStyle = "White";
        this.context.font = "24px Arial";
        this.context.fillText ( "ブロック崩し",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2
        );

        // メッセージを描画する
        this.context.font = "24px Arial";
        this.context.fillText ( "Press Enter",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2 + 40
        );
    }
}