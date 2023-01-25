class Background {
  constructor() {
    this.x1 = 0;
    this.x2 = WIDTH;
    this.scrollSpeed = 3;
  }
  draw() {
    background(255)
    image(game.bgImage, this.x1, 50, WIDTH, HEIGHT-100);
    image(game.bgImage, this.x2, 50, WIDTH, HEIGHT-100);

    this.x1 -= this.scrollSpeed;
    this.x2 -= this.scrollSpeed;

    if (this.x1 < -WIDTH) {
      this.x1 = WIDTH - 15;
    }
    if (this.x2 < -WIDTH) {
      this.x2 = WIDTH - 15;
    }
  }
  changeSpeed(speedSetting) {
    this.scrollSpeed=speedSetting;
  }
}
