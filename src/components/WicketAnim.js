
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class WicketAnim {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__WicketAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.play(this.wicketAnimPlayer);
		/* END-USER-CTR-CODE */
	}

	/** @returns {WicketAnim} */
	static getComponent(gameObject) {
		return gameObject["__WicketAnim"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	wicketAnimPlayer = "wicketAnimation";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
