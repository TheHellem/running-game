const game = new Game();

function preload(){
  game.preload();
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
}

function draw() {
  game.draw();
}

function keyPressed() {
	if (keyCode === 32) {
		game.runner.jump()
	}
}queueMicrotask