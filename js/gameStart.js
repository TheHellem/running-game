class GameStart {
    constructor(){
        this.startButton;
        this.image;

    }
    preload(){
        this.image = loadImage("../assets/images/runner_wave.gif")
    }
    setup(){
        this.startButton = new StartButton('Start Game', 600/ 2, 700 / 1.6);
    }
    draw(){
        background(255,255,255)
        image(this.image,0,100,400,400)

        text("The Sophisticated Stickman's Great Escape")

        this.startButton.draw()
    }
    chooseGameTitle(){
        let gameTitles = [
            "The Sophisticated Stickman's Great Escape",
            "Stickman's High-Class Hurdles",
            "The Stickman's Lavish Adventure",
            "The Stickman's Extravagant Excursion",
            "The Stickman's Splendid Adventure",
            "The Stickman's Exquisite Expedition",
            "Stickman's Refined Adventure",
            "Stickman Sprint: The Adventure Begins"
        ];
    }
}