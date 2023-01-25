class Button {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center("horizontal");
    this.button.addClass("action-button");
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
