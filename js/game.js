const HEIGHT = 700;
const WIDTH = 600;

class Game {
  constructor() {
    this.ground = new Ground();
    this.runner = new Runner();
    this.background = new Background();

    this.cones = [];
    this.coneImage;
    this.beers = [];
    this.beerImage;
    this.score = 0;
  }
  preload() {
    this.runnerImage = loadImage("../assets/images/runner/runner-default.gif");
    this.bgImage = loadImage(
      "../assets/images/game-background/background1.png"
    );
    this.coneImage = loadImage(
      "../assets/icons/construction-traffic-cone-icon.svg"
    );
    this.beerImage = loadImage("../assets/icons/tropical-dring.svg");
  }
  draw() {
    clear();
    this.background.draw();
    this.ground.draw();
    this.runner.draw();

    // Adjust difficulty in accordance with score
    let speedVar = this.increaseDifficulty(this.score);

    //// Beer section
    if (frameCount % 300 === 0) this.beers.push(new Beer(this.beerImage));
    this.drawObstacle(this.beers, speedVar);
    this.beers.forEach((beer) => {
      if (beer.collision(this.runner)) this.score++;
    });

    this.beers = this.beers.filter((beer) =>
      beer.collision(this.runner) || beer.x < 0 - beer.width ? false : true
    );

    //// Obstacle section
    if (frameCount % 240 === 0) this.cones.push(new Cone(this.coneImage));
    this.drawObstacle(this.cones, speedVar);
    this.cones = this.cones.filter((cone) =>
      cone.x < 0 - cone.width ? false : true
    );

    // Change background speed
    this.background.changeSpeed(speedVar);

    //// Game over:

    this.cones.forEach((cone) => {
      if (cone.collision(this.runner)) this.showGameOverScreen(this.score);
    });
  }
  drawObstacle(element, speedVar) {
    element.forEach(function (obstacle) {
      obstacle.changeSpeed(speedVar);
      obstacle.draw();
    });
  }
  increaseDifficulty(score) {
    // Need to adjust bakground mess when changing speeds
    const speedSettings = [
      { range: [0, 2], setting: 8 },
      { range: [3, 6], setting: 12 },
      { range: [7, 9], setting: 16 },
      { range: [10, 12], setting: 20 },
      { range: [13, Infinity], setting: 24 },
    ];

    const speedSetting = speedSettings.find(
      (item) => score >= item.range[0] && score <= item.range[1]
    );
    return speedSetting.setting;
  }
  showGameOverScreen(score) {
    rect(WIDTH / 6, HEIGHT / 8, 400, 500, 20);

    // Game over message
    textSize(60);
    textFont("monospace");
    text("GAME OVER", 135, 200, 400, 200);

    // Display final score
    image(this.beerImage, 220, 300, 50, 50);
    textSize(40);
    textFont("monospace");
    text(`= ${score}`, 290, 310, 100, 100);

    noLoop();
  }
}
