
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PlayerIdleAnim {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PlayerIdleAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.play(this.playerIdleAnim);
		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayerIdleAnim} */
	static getComponent(gameObject) {
		return gameObject["__PlayerIdleAnim"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	playerIdleAnim = "playerIdle";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
