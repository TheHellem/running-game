class GameStart {
    constructor(){
        this.startButton;

    }
    preload(){

    }
    setup(){
        this.startButton = new StartButton('Start Game', 600/ 2, 700 / 1.6);
    }
    draw(){
        background(255,255,255)
        this.startButton.draw()
    }
}