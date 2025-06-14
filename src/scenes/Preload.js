
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// bg_sheet1
		const bg_sheet1 = this.add.image(960, 540, "bg-sheet1");
		bg_sheet1.scaleX = 1.55;
		bg_sheet1.scaleY = 1.55;

		// progress
		const progress = this.add.text(960, 537, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "digital", "fontSize": "64px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		// this.oSoundManager = new SoundManager(this);
		// this.oSoundManager.playMusic(this.oSoundManager.bg_music, true);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Home"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
