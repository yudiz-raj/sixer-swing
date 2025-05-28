
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// stadiumBackground
		const stadiumBackground = this.add.image(960, 540, "bg-sheet1");
		stadiumBackground.scaleX = 1.55;
		stadiumBackground.scaleY = 1.55;

		// logo
		const logo = this.add.image(960, 593, "logo");
		logo.scaleX = 0.1;
		logo.scaleY = 0.1;

		// play_btn
		const play_btn = this.add.image(960, 915, "play_btn");
		play_btn.scaleX = 1.5;
		play_btn.scaleY = 1.5;

		// info_btn
		const info_btn = this.add.image(1830, 909, "info_btn");
		info_btn.scaleX = 1.4;
		info_btn.scaleY = 1.4;

		// sound_btn
		const sound_btn = this.add.image(1830, 1019, "sound_btn");
		sound_btn.scaleX = 1.4;
		sound_btn.scaleY = 1.4;

		// off_line
		const off_line = this.add.image(1832, 1014, "off_line");
		off_line.scaleX = 1.4;
		off_line.scaleY = 1.4;

		// popup
		const popup = new Popup(this, 960, 540);
		this.add.existing(popup);
		popup.visible = false;

		this.logo = logo;
		this.play_btn = play_btn;
		this.info_btn = info_btn;
		this.sound_btn = sound_btn;
		this.off_line = off_line;
		this.popup = popup;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	play_btn;
	/** @type {Phaser.GameObjects.Image} */
	info_btn;
	/** @type {Phaser.GameObjects.Image} */
	sound_btn;
	/** @type {Phaser.GameObjects.Image} */
	off_line;
	/** @type {Popup} */
	popup;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.popup.rectangle.setInteractive();
		this.popup.rectangle.on('pointerdown', () => {
			this.popup.container_popup.setScale(0);
			this.popup.setVisible(false);
		})
		// Create a graphics object for the mask
		const mask = this.make.graphics();
		mask.fillStyle(0xffffff);
		mask.beginPath();
		mask.fillRect(960 - this.logo.width, 343 - this.logo.height, this.logo.width * 2, this.logo.height * 1.5);
		const maskImage = mask.createGeometryMask();
		this.logo.setMask(maskImage);

		this.tweens.add({
			targets: this.logo,
			scale: 1,
			y: 343 - 50,
			duration: 500,
			delay: 500,
			ease: 'Sine.easeInOut',
			onComplete: () => {
				this.tweens.add({
					targets: this.logo,
					scale: 1,
					y: 350.5,
					duration: 700,
					ease: 'Bounce.easeOut',
				});
			}
		});

		this.play_btn.setInteractive();
		this.play_btn.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
		});
		this.play_btn.on('pointerout', () => {
			this.input.setDefaultCursor('default');
		});
		this.play_btn.on('pointerdown', () => {
			this.play_btn.setVisible(false);
			this.input.setDefaultCursor('default');
			this.oSoundManager.playSound(this.oSoundManager.click_sound, false);
			this.oSoundManager.stopSound(this.oSoundManager.bg_music, false);
			this.cameras.main.fadeOut(200);
			const MESSAGE = Object.freeze({
				START_GAME: "start-game",
				LEVEL_UP: "level-up",
				END_GAME: "end-game"
			})

			const data = {
				sMessage: MESSAGE.START_GAME,
				nLevel: 0,
				nScore: 0,
			}
			window.parent.postMessage(JSON.stringify(data), "*");
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.scene.start('Level', { isSoundOn: this.oSoundManager.isSoundOn });
			});
		});
		this.info_btn.setInteractive();
		this.info_btn.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
		});
		this.info_btn.on('pointerout', () => {
			this.input.setDefaultCursor('default');
		});
		this.info_btn.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.click_sound, false);
			this.popup.setVisible(true);
			this.tweens.add({
				targets: this.popup.container_popup,
				scale: { from: 0, to: 1 },
				duration: 500,
				ease: 'Sine.easeInOut'
			})
		})
		this.sound_btn.setInteractive();
		this.sound_btn.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
		});
		this.sound_btn.on('pointerout', () => {
			this.input.setDefaultCursor('default');
		});
		this.sound_btn.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.click_sound, false);
			this.oSoundManager.isSoundOn = !this.oSoundManager.isSoundOn;
			this.oSoundManager.isSoundOn ? this.off_line.setVisible(false) : this.off_line.setVisible(true);
			this.oSoundManager.isSoundOn ? this.oSoundManager.playSound(this.oSoundManager.bg_music, true) : this.oSoundManager.stopSound(this.oSoundManager.bg_music, false);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
