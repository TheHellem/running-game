class Runner {
  constructor() {
    this.width = 140;
    this.height = 140;
    this.x = 0;
    this.y = (HEIGHT / 6) * 4.5;
    this.velocity = 0;
    this.gravity = 0.2;
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= 600 - this.height) {
      this.y = 600 - this.height;
    }
    image(game.runnerImage, this.x, this.y, this.width, this.height);
  }
  jump() {
    this.velocity = -7;
  }
}
