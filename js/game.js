class Game {
  constructor() {
    this.ground = new Ground();
    this.runner = new Runner();
    this.background = new Background();
    this.obstacles = [];
    this.obstacleImage;
  }
  preload() {
    this.runnerImage = loadImage("../assets/images/runner/runner-default.gif");
    this.bgImage = loadImage(
      "../assets/images/game-background/background1.png"
    );
    this.obstacleImage = loadImage(
      "../assets/icons/construction-traffic-cone-icon.svg"
    );
  }
  draw() {
    clear();
    this.background.draw();
    this.ground.draw();
    this.runner.draw();

    if (frameCount % 360 === 0) {
      this.obstacles.push(new Obstacle(this.obstacleImage));
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < 0 - obstacle.width) {
        return false;
      } else {
        return true;
      }
    });
  }
}
