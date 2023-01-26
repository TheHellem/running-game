class GameStart {
  constructor() {
    this.startButton;
    this.image;
    this.beerImage;
    this.coneImage;
    this.spacebarImage;

    this.x = 275;
    this.y = 300
    this.width = 60;
    this.heigth = 60;

    this.x2 = 330;
    this.y2 = this.y;
    this.width2 = 150;
    this.heigth2 = 30;

    
  }
  preload() {
    this.image = loadImage("assets/images/runner/runner_wave.gif");
    this.coneImage = loadImage(
      "assets/icons/construction-traffic-cone-icon.svg"
    );
    this.beerImage = loadImage("assets/icons/tropical-dring.svg");
    this.spacebarImage = loadImage("assets/icons/spacebar.svg");
  }
  setup() {
    this.startButton = new StartButton("Start Game", 100, 600);
  }
  draw() {
    

    background(255, 255, 255);
    image(this.image, 0, 100, 400, 400);

    textSize(30);
    text("The Sophisticated Stickman's Great Escape", 100, 75, 500, 200);
    textFont("monospace");

    image(this.beerImage, this.x, this.y - 80, this.width, this.heigth)
    image(this.coneImage, this.x+10, this.y, this.width-20, this.heigth-20)
    image(this.spacebarImage, this.x-20, this.y-10 + 80, this.width+40, this.heigth+40)

    textSize(25);
    text("= Good", this.x2, this.y2 -50, this.width2, this.heigth2)
    text("= Bad", this.x2, this.y2+10, this.width2, this.heigth2)
    text("= Jump!", this.x2+30, this.y2 +100, this.width2, this.heigth2)

    this.startButton.draw();
  }
  chooseGameTitle() {
    let gameTitles = [
      "The Sophisticated Stickman's Great Escape",
      "Stickman's High-Class Hurdles",
      "The Stickman's Lavish Adventure",
      "The Stickman's Extravagant Excursion",
      "The Stickman's Splendid Adventure",
      "The Stickman's Exquisite Expedition",
      "Stickman's Refined Adventure",
      "Stickman Sprint: The Adventure Begins",
    ];
  }
}
