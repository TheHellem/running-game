const start = new GameStart();
const game = new Game();

let gameState = {
  start,
  game,
};

let gameOver = false;
let currentGameState = "start";

function preload() {
  start.preload();
  game.preload();
}

function setup() {
  start.setup();
  createCanvas(600, 700);
  // Ad hoc solution to not draw the resetbutton to early
  if (gameOver){
    game.setup()
  }
}

function draw() {
  gameState[currentGameState].draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.runner.jump();
  }
}
