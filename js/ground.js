class Ground {
  constructor() {
    this.x1 = 0;
    this.y1 = ((HEIGHT / 6) * 4.5)+73;
    this.x2 = WIDTH;
    this.y2 = ((HEIGHT / 6) * 4.5)+73;
  }

  draw() {
    strokeWeight(2)
    color ("black")
    const startLine = line(this.x1, this.y1, this.x2, this.y2)
  }
}
