
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PlayerShotAnim {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PlayerShotAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.play(this.playerShotAnim);
		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayerShotAnim} */
	static getComponent(gameObject) {
		return gameObject["__PlayerShotAnim"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	playerShotAnim = "playerShot";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
