class Game {
    constructor(){
        this.ground = new Ground();
        this.runner = new Runner();
        this.background = new Background ();

    }
    preload(){
        this.runnerImage = loadImage("../images/runner/runner-default.gif")
        this.bgImage = loadImage("../images/background/background1.png")
    }
    draw(){
        clear()
        this.background.draw();
        this.ground.draw();
        this.runner.draw()
        
    }
}