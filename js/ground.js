class Ground {
  constructor() {
    this.x1 = 0;
    this.y1 = (HEIGHT / 6)*5;
    this.x2 = WIDTH;
    this.y2 = (HEIGHT / 6)*5;
  }

  draw() {
    strokeWeight(5)
    color ("black")
    line(this.x1, this.y1, this.x2, this.y2).draw();
  }
}
