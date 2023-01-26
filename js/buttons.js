class Button {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
  }

  draw() {
    colorMode(RGB)
    let bgColor = color(255,255,255)
    this.button.position(this.x, this.y);
    this.button.addClass("action-button");
    this.button.style("background-color", bgColor);
    this.button.style("font-family", "Monospace")
    this.button.style("font-size", "24px")
    this.button.size(200,100)
    this.button.center("horizontal")
  }
}

class StartButton extends Button {
  constructor(text, x, y) {
    super(text, x, y);
    this.button.mousePressed(() => this.changeState());
  }
  changeState() {
    this.button.remove();
    currentGameState = "game";
  }
}

class ResetButton extends Button {
  constructor(text, x, y) {
    super(text, x, y);
    this.button.mousePressed(() => this.restartGame());
  }
  restartGame() {
    this.button.remove();
    game.resetGame()
    loop();
  }
}
