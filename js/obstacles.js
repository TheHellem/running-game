class Obstacle {
  constructor(image) {
    this.image = image;
    this.x = width
    this.y = (HEIGHT / 6) * 4.5+25;
    this.heigth = 50;
    this.width = 50;
    this.xVelocity = 3;
  }
  draw() {
    this.x -= this.xVelocity;
    image(this.image, this.x, this.y, this.width, this.heigth);
  }
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
      return false;
    } else {
      playerInfo.score++;

      return true;
    }
  }
}
