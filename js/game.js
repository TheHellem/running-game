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

    // Beer section
    if (frameCount % 300 === 0) this.beers.push(new Beer(this.beerImage));

    this.drawObstacle(this.beers, speedVar)

    // Add point for each alcohol unit consumed
    this.beers.forEach((beer) => {
      if (beer.collision(this.runner)) {
        this.score++;
      }
    });

    this.beers = this.beers.filter((beer) =>
      beer.collision(this.runner) || beer.x < 0 - beer.width ? false : true
    );

    // Obstacle section
    if (frameCount % 240 === 0) {
      this.cones.push(new Cone (this.coneImage));
    }

    this.drawObstacle(this.cones, speedVar)

    this.cones = this.cones.filter((cone) =>
      cone.x < 0 - cone.width ? false : true
    );

    // Change background speed
    this.background.changeSpeed(speedVar);
  }
  drawObstacle(element, speedVar){
    element.forEach(function (obstacle) {
    obstacle.changeSpeed(speedVar);
    obstacle.draw();
    });

  }
  increaseDifficulty(score) {
    const speedSettings = [
      { range: [0, 2], setting: 3 },
      { range: [3, 6], setting: 4 },
      { range: [7, 9], setting: 8 },
      { range: [10, 12], setting: 12 },
      { range: [13, Infinity], setting: 16 },
    ];

    const speedSetting = speedSettings.find(
      (item) => score >= item.range[0] && score <= item.range[1]
    );
    return speedSetting.setting;
  }
}
