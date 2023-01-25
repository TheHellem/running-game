class Obstacle {
  constructor(image) {
    this.image = image;
    this.x = WIDTH;
    this.y = (HEIGHT / 6) * 4.5+25;
    this.height = 50;
    this.width = 50;
    this.xVelocity = 3;
  }
  draw() {
    this.x -= this.xVelocity;
    image(this.image, this.x, this.y, this.width, this.height);
  }
  collision(playerInfo) {
    let beerX = this.x + this.width / 2;
    let beerY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(beerX, beerY, playerX, playerY) > 50) {
      return false;
    } else {
      return true;
    }
  }
  changeSpeed(speedSetting) {
    this.xVelocity=speedSetting;
  }
}

class Beer extends Obstacle {
  constructor(image){
    super(image)

  }
}

class Cone extends Obstacle {
  constructor(image){
    super(image)

  }
}