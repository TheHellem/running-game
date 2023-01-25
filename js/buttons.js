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
    this.button.mousePressed(() => this.changeState());
  }
}

class StartButton extends Button{
  constructor(text, x, y){
    super(text, x, y)
  }
  changeState() {
    this.button.remove();
    this.button = null;
    currentGameState = "game";
  }
}