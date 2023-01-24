class Background {
  constructor() {
    this.x1 = 0;
    this.x2 = WIDTH;
    this.scrollSpeed = 3;
  }
  draw() {
    image(game.bgImage, this.x1, 0, WIDTH, HEIGHT);
    image(game.bgImage, this.x2, 0, WIDTH, HEIGHT);

    this.x1 -= this.scrollSpeed;
    this.x2 -= this.scrollSpeed;

    if (this.x1 < -WIDTH) {
      this.x1 = WIDTH-5;
    }
    if (this.x2 < -WIDTH) {
      this.x2 = WIDTH-5;
    }
  }
  changeSpeed(score){
    this.scrollSpeed = score
    console.log(score)
  }
}
