class Runner {
  constructor() {
    this.width = 140;
    this.height = 140;
    this.x = 0;
    this.y = 600 - this.height;
    this.velocity = 0;
    this.gravity = 0.2;
    this.speedVar = 0;
  }
  draw() {

    this.speedVar = game.increaseDifficulty(game.score);

    switch (this.speedVar){
      case 10:
        image(game.runnerImages[0].src,this.x, this.y, this.width, this.height)
        break
      case 12:
        image(game.runnerImages[1].src,this.x, this.y, this.width, this.height)
        break
      case 16:
        image(game.runnerImages[4].src,this.x, this.y, this.width, this.height)
        break  
      case 20:
        image(game.runnerImages[2].src,this.x, this.y, this.width, this.height)
        break
      default:
        image(game.runnerImages[2].src,this.x, this.y, this.width, this.height)
    }
    

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= 600 - this.height) this.y = 600 - this.height;

  }
  jump() {
    if (this.y === 600 - this.height){
      game.jumpSound.play()
      this.velocity = -7;
    }
    
  }
}
