class Beer {
  constructor(image) {
    this.image = image;
    this.x = WIDTH;
    this.y = 550;
    console.log("y"+this.y)
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
      playerInfo.score++;

      return true;
    }
  }
}
