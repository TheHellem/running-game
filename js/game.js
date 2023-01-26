const HEIGHT = 700;
const WIDTH = 600;

class Game {
  constructor() {
    this.runner = new Runner();
    this.background = new Background();

    this.cones = [];
    this.coneImage;
    this.beers = [];
    this.beerImage;
    this.score = 0;

    this.resetbutton;

    this.jumpSound;
    this.startMusic;
    this.tropicalDrinkSound;
    this.buttonPressSound;
    this.buttonResetSound;
  }
  preload() {

    // images
    this.runnerImages = [
      { src: loadImage("assets/images/runner/runner_normal.gif")},
      { src: loadImage("assets/images/runner/runner_happy.gif")},
			{ src: loadImage("assets/images/runner/runner_drunk.gif")},
			{ src: loadImage("assets/images/runner/runner_jump.gif")},
			{ src: loadImage("assets/images/runner/runner_surprised.gif")}
    ]
    
    this.bgImage = loadImage(
      "assets/images/game-background/background1.png"
    );
    this.coneImage = loadImage(
      "assets/icons/construction-traffic-cone-icon.svg"
    );
    this.beerImage = loadImage("assets/icons/tropical-dring.svg");

    // sound
    this.startMusic = loadSound("assets/backgroundMusic/start-menu.mp3")
    this.jumpSound = loadSound("assets/soundEffects/runner_jump.mp3")
    this.tropicalDrinkSound = loadSound("assets/soundEffects/tropical_drink.mp3")
    this.crashSound = loadSound("assets/soundEffects/crash.mp3")
    this.buttonPressSound = loadSound("assets/soundEffects/button.mp3")
    this.buttonResetSound = loadSound("assets/soundEffects/button_resett.mp3")

  }
  draw() {
    clear();
    noCursor();
    this.background.draw();
    this.runner.draw();
    this.drawGround();

    if (!this.startMusic.isPlaying()) this.startMusic.loop()

    // Adjust difficulty in accordance with score
    let speedVar = this.increaseDifficulty(this.score);

    //// Tropical drink section (was supposed to be beer, but decided to add some class)
    if (frameCount % 300 === 0) this.beers.push(new Beer(this.beerImage));
    this.drawObstacle(this.beers, speedVar);
    this.beers.forEach((beer) => {
      if (beer.collision(this.runner)) {
        this.tropicalDrinkSound.play()
        this.score++;
      }
    });

    this.beers = this.beers.filter((beer) =>
      beer.collision(this.runner) || beer.x < 0 - beer.width ? false : true
    );

    //// Obstacle section
    if (frameCount % 229 === 0) this.cones.push(new Cone(this.coneImage));
    this.drawObstacle(this.cones, speedVar);
    this.cones = this.cones.filter((cone) =>
      cone.x < 0 - cone.width ? false : true
    );

    // Change background speed
    this.background.changeSpeed(speedVar);

    //// Game over:

    this.cones.forEach((cone) => {
      if (cone.collision(this.runner)) {
        this.crashSound.play()
        gameOver = true;
        this.showGameOverScreen(this.score);
        this.startMusic.stop()
      }
    });

    // score
    if (gameOver === false) {
      this.displayScore(this.score);
    }

  }
  drawGround() {
    strokeWeight(2);
    color("black");
    const startLine = line(
      0,
      (HEIGHT / 6) * 4.5 + 73,
      WIDTH,
      (HEIGHT / 6) * 4.5 + 73
    );
  }
  drawObstacle(element, speedVar) {
    element.forEach(function (obstacle) {
      obstacle.changeSpeed(speedVar);
      obstacle.draw();
    });
  }
  displayScore(score){
      image(this.beerImage, 450, 20, 45, 45)
      textSize(35)
      textFont("monospace")
      text(`= ${score}`, 510, 30, 200, 100);      
  }
  increaseDifficulty(score) {
    // Need to adjust bakground mess when changing speeds
    const speedSettings = [
      { range: [0, 2], setting: 10 },
      { range: [3, 6], setting: 12 },
      { range: [7, 9], setting: 16 },
      { range: [10, 12], setting: 20 },
      { range: [13, 14], setting: 24 },
      { range: [15, 16], setting: 28 },
      { range: [17, Infinity], setting: 30 },
    ];

    const speedSetting = speedSettings.find(
      (item) => score >= item.range[0] && score <= item.range[1]
    );
    return speedSetting.setting;
  }
  showGameOverScreen(score) {
    cursor(); // this line somehow creates a lag
    //probably should use fractions here
    rect(WIDTH / 6, HEIGHT / 8, 400, 500, 20);

    // Game over message
    textSize(60);
    textFont("monospace");
    text("GAME OVER", 135, 200, 400, 200);

    // Display final score
    image(this.beerImage, 220, 300, 50, 50);
    textSize(40);
    textFont("monospace");
    text(`= ${score}`, 290, 310, 200, 100);

    this.resetbutton = new ResetButton('Play again', 450, 500);
    this.resetbutton.draw();

    noLoop();
  }
  resetGame(){
    this.score = 0;
    this.cones = [];
    this.beers = [];
    gameOver = false;

  }
}
