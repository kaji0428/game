// js/sound.js
'use strict';

export class Sound {
    #data = null;

    constructor(src , volume = 0.5 , loop = false) {
        this.#data = new Audio(src);
    


        
        this.#data.volume = volume;
        // ループ再生を設定
        this.#data.loop = loop;
    }

    play() {
        this.#data.play();
    }
}