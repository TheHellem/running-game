class Game {
    constructor(){
        this.ground = new Ground();
        this.runner = new Runner();
        this.background = new Background ();

    }
    preload(){
        this.runnerImage = loadImage("../assets/images/runner/runner-default.gif")
        this.bgImage = loadImage("../assets/images/game-background/background1.png")
    }
    draw(){
        clear()
        this.background.draw();
        this.ground.draw();
        this.runner.draw()
        
    }
}