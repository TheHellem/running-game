
class Runner {
	constructor() {
		this.width = 140
		this.height = 140
		this.x = 0
		this.y = 600 - this.height
	}

	draw() {
		image(game.runnerImage, this.x, this.y, this.width, this.height)
	}

}