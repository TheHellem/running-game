class Game {
  constructor() {
    this.ground = new Ground();
    this.runner = new Runner();
    this.background = new Background();
    this.beer = new Beer();
    this.obstacles = [];
    this.obstacleImage;
    this.beers = [];
    this.beerImage;
  }
  preload() {
    this.runnerImage = loadImage("../assets/images/runner/runner-default.gif");
    this.bgImage = loadImage(
      "../assets/images/game-background/background1.png"
    );
    this.obstacleImage = loadImage(
      "../assets/icons/construction-traffic-cone-icon.svg"
    );
    this.beerImage = loadImage("../assets/icons/tropical-dring.svg");
  }
  draw() {
    clear();
    this.background.draw();
    this.ground.draw();
    this.runner.draw();

    // Beer section
    if (frameCount % 300 === 0) {
      this.beers.push(new Beer (this.beerImage));
    }

    this.beers.forEach(function (beer) {
      beer.draw();
    });

    this.beers = this.beers.filter(beer => {
        if (beer.collision(this.runner) || beer.x < 0 - beer.width) {
            return false
        } else {
            return true
        }
    });

    // Obstacle section
    if (frameCount % 240 === 0) {
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
