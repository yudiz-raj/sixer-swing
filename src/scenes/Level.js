
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

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

		// runsContainer
		const runsContainer = this.add.container(0, 0);

		// scoreTitle
		const scoreTitle = this.add.text(895, 514, "", {});
		scoreTitle.setOrigin(0.5, 0.5);
		scoreTitle.text = "SCORE";
		scoreTitle.setStyle({ "align": "center", "baselineX": 0, "baselineY": 0, "color": "#55fe01", "fontFamily": "digital", "fontSize": "28px" });
		runsContainer.add(scoreTitle);

		// runsText
		const runsText = this.add.text(895, 560, "", {});
		runsText.setOrigin(0.5, 0.5);
		runsText.text = "0";
		runsText.setStyle({ "align": "center", "baselineX": 0, "baselineY": 0, "color": "#55fe01", "fontFamily": "digital", "fontSize": "58px" });
		runsContainer.add(runsText);

		// targetScoreTitle
		const targetScoreTitle = this.add.text(1015, 514, "", {});
		targetScoreTitle.setOrigin(0.5, 0.5);
		targetScoreTitle.text = "TARGET";
		targetScoreTitle.setStyle({ "align": "center", "baselineX": 0, "baselineY": 0, "color": "#fefe02", "fontFamily": "digital", "fontSize": "28px" });
		runsContainer.add(targetScoreTitle);

		// targetRunsText
		const targetRunsText = this.add.text(1015, 560, "", {});
		targetRunsText.setOrigin(0.5, 0.5);
		targetRunsText.text = "0";
		targetRunsText.setStyle({ "align": "center", "baselineX": 0, "baselineY": 0, "color": "#fefe02", "fontFamily": "digital", "fontSize": "58px" });
		runsContainer.add(targetRunsText);

		// text_1
		const text_1 = this.add.text(952, 543, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "|\n|\n|\n|\n|\n|";
		text_1.setStyle({ "color": "#c2c8c9" });
		runsContainer.add(text_1);

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// playAgainBtn
		const playAgainBtn = this.add.image(960, 915, "play_btn");
		playAgainBtn.scaleX = 1.5;
		playAgainBtn.scaleY = 1.5;
		playAgainBtn.visible = false;
		backgroundContainer.add(playAgainBtn);

		// out_image
		const out_image = this.add.image(960, 306, "out");
		out_image.visible = false;
		backgroundContainer.add(out_image);

		// you_win
		const you_win = this.add.image(960, 438, "you_win");
		you_win.scaleX = 0.8;
		you_win.scaleY = 0.8;
		you_win.visible = false;
		backgroundContainer.add(you_win);

		// you_lose
		const you_lose = this.add.image(960, 494, "you_lose");
		you_lose.scaleX = 0.8;
		you_lose.scaleY = 0.8;
		you_lose.visible = false;
		backgroundContainer.add(you_lose);

		// scoreContainer
		const scoreContainer = this.add.container(0, 1);

		// scoreBackground
		const scoreBackground = this.add.image(1775, 540, "bb-sheet0");
		scoreBackground.scaleX = 1.5;
		scoreBackground.scaleY = 1.5;
		scoreContainer.add(scoreBackground);

		// wicketContainer
		const wicketContainer = this.add.container(0, 0);

		// wicket1
		const wicket1 = this.add.image(168, 854, "wicket2-sheet0");
		wicketContainer.add(wicket1);

		// wicket3
		const wicket3 = this.add.image(168, 935, "wicket2-sheet0");
		wicket3.setOrigin(0.5, 1);
		wicketContainer.add(wicket3);

		// wicket2
		const wicket2 = this.add.image(168, 934, "wicket2-sheet0");
		wicket2.setOrigin(0.5, 1);
		wicketContainer.add(wicket2);

		// player
		const player = this.add.sprite(410, 784, "player-sheet2", 35);
		player.scaleX = 1.6;
		player.scaleY = 1.6;

		// oneRun
		const oneRun = this.add.image(1684, 983, "1");
		oneRun.scaleX = 1.5;
		oneRun.scaleY = 1.5;

		// twoRun
		const twoRun = this.add.image(1747, 765, "2");
		twoRun.scaleX = 1.6;
		twoRun.scaleY = 1.6;

		// threeRun
		const threeRun = this.add.image(1763, 540, "3");
		threeRun.scaleX = 1.6;
		threeRun.scaleY = 1.6;

		// fourRun
		const fourRun = this.add.image(1740, 315, "4");
		fourRun.scaleX = 1.6;
		fourRun.scaleY = 1.6;

		// sixRun
		const sixRun = this.add.image(1668, 91, "6");
		sixRun.scaleX = 1.6;
		sixRun.scaleY = 1.6;

		// batC
		const batC = this.add.container(0, 0);

		// sound_btn
		const sound_btn = this.add.image(1830, 1019, "sound_btn");
		sound_btn.scaleX = 1.4;
		sound_btn.scaleY = 1.4;

		// off_line
		const off_line = this.add.image(1832, 1014, "off_line");
		off_line.scaleX = 1.4;
		off_line.scaleY = 1.4;

		// mud
		this.add.image(170, 930, "mud");

		// player (components)
		new PlayerIdleAnim(player);

		this.stadiumBackground = stadiumBackground;
		this.runsText = runsText;
		this.targetRunsText = targetRunsText;
		this.playAgainBtn = playAgainBtn;
		this.out_image = out_image;
		this.you_win = you_win;
		this.you_lose = you_lose;
		this.backgroundContainer = backgroundContainer;
		this.scoreContainer = scoreContainer;
		this.wicket3 = wicket3;
		this.wicket2 = wicket2;
		this.wicketContainer = wicketContainer;
		this.player = player;
		this.oneRun = oneRun;
		this.twoRun = twoRun;
		this.threeRun = threeRun;
		this.fourRun = fourRun;
		this.sixRun = sixRun;
		this.batC = batC;
		this.sound_btn = sound_btn;
		this.off_line = off_line;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	stadiumBackground;
	/** @type {Phaser.GameObjects.Text} */
	runsText;
	/** @type {Phaser.GameObjects.Text} */
	targetRunsText;
	/** @type {Phaser.GameObjects.Image} */
	playAgainBtn;
	/** @type {Phaser.GameObjects.Image} */
	out_image;
	/** @type {Phaser.GameObjects.Image} */
	you_win;
	/** @type {Phaser.GameObjects.Image} */
	you_lose;
	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Container} */
	scoreContainer;
	/** @type {Phaser.GameObjects.Image} */
	wicket3;
	/** @type {Phaser.GameObjects.Image} */
	wicket2;
	/** @type {Phaser.GameObjects.Container} */
	wicketContainer;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Image} */
	oneRun;
	/** @type {Phaser.GameObjects.Image} */
	twoRun;
	/** @type {Phaser.GameObjects.Image} */
	threeRun;
	/** @type {Phaser.GameObjects.Image} */
	fourRun;
	/** @type {Phaser.GameObjects.Image} */
	sixRun;
	/** @type {Phaser.GameObjects.Container} */
	batC;
	/** @type {Phaser.GameObjects.Image} */
	sound_btn;
	/** @type {Phaser.GameObjects.Image} */
	off_line;

	/* START-USER-CODE */

	// Write more your code here
	init(oData) {
		this.isSoundOn = oData.isSoundOn;
	}
	create() {

		this.cameras.main.fadeIn(200);
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oSoundManager.isSoundOn = this.isSoundOn;
		this.oSoundManager.isSoundOn ? this.off_line.setVisible(false) : this.off_line.setVisible(true);
		this.oSoundManager.playSound(this.oSoundManager.crowdBackground_sound, true);
		this.oSoundManager.playSound(this.oSoundManager.bg_music, true);
		this.targetRuns = Phaser.Math.Between(30, 60);
		this.targetRunsText.setText(this.targetRuns);
		this.runs = 0;
		this.ball = this.physics.add.sprite(1950, 540, "ball").setVisible(false);
		this.ballHit = false;
		this.animationPlaying = false;

		this.bat = this.physics.add.image(0, 160, "bat").setOrigin(0.5, 0).setScale(1, 1.5).setAlpha(0).refreshBody();
		this.bat.body.allowGravity = false;
		this.bat.setCircle(90, -100, -30)
		this.batC.add(this.bat)
		this.bat.setImmovable(true)
		this.bat.refreshBody()

		this.sound_btn.setInteractive();
		this.sound_btn.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
		});
		this.sound_btn.on('pointerout', () => {
			this.input.setDefaultCursor('default');
		});
		this.sound_btn.on('pointerdown', () => {
			this.oSoundManager.isSoundOn = !this.oSoundManager.isSoundOn;
			this.oSoundManager.isSoundOn ? this.off_line.setVisible(false) : this.off_line.setVisible(true);
			this.oSoundManager.isSoundOn ? this.oSoundManager.playSound(this.oSoundManager.bg_music, true) : this.oSoundManager.stopSound(this.oSoundManager.bg_music, false);
			this.oSoundManager.isSoundOn ? this.oSoundManager.playSound(this.oSoundManager.crowdBackground_sound, true) : this.oSoundManager.stopSound(this.oSoundManager.crowdBackground_sound, false);
		});
		this.stadiumBackground.setInteractive();
		this.stadiumBackground.on('pointerdown', () => {
			if (!this.animationPlaying) {
				this.animationPlaying = true;
				this.player.anims.stop("playerIdle");
				this.ballHit = true;
				this.player.anims.play("playerShot", false);
				this.addBatCollider();
				setTimeout(() => {
					this.player.anims.play("playerIdle", false);
					this.removeBatCollider();
					this.animationPlaying = false;
				}, 1000);
			}
		});

		this.playAgainBtn.setInteractive()
		this.playAgainBtn.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
		});
		this.playAgainBtn.on('pointerout', () => {
			this.input.setDefaultCursor('default');
		});
		this.playAgainBtn.on('pointerdown', () => {
			this.playAgainBtn.disableInteractive();
			this.input.setDefaultCursor('default');
			this.playAgainBtn.setVisible(false);
			this.cameras.main.fadeOut(200);
			clearInterval(this.ballInterval);
			this.ballInterval = null;
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
				this.sound.removeAll();
				this.scene.start("Level", { isSoundOn: this.oSoundManager.isSoundOn });
			});
		});

		this.wicketFallFlag = false;
		this.pitch = this.physics.add.staticSprite(960, 947, "bg-sheet-pitch").setScale(1.8, 1).refreshBody().setAlpha(0);
		this.pitch.setBodySize(1920, 100, true).refreshBody;
		this.pitch.body.y = 937;
		this.backgroundContainer.add(this.pitch);

		this.batCollider = this.physics.add.staticSprite(0, 0, "").setAlpha(0);

		this.wicket_1 = this.physics.add.staticSprite(168, 932, "wicket2-sheet0").setOrigin(0.5, 1).refreshBody().setAlpha(0);
		this.wicket_1.setBodySize(100, 180, false).refreshBody;
		this.wicket_1.body.x = 80;
		this.wicketContainer.add(this.wicket_1);

		this.balls = this.add.group();
		!this.ballInterval && setTimeout(() => {
			this.addBall();
			this.ballInterval = setInterval(() => this.addBall(), 5000);
		}, 1000);
		this.physics.add.collider(this.balls, this.pitch);
		this.physics.add.collider(this.balls, this.wicket_1, this.wicketFall, null, this);
		this.physics.add.collider(this.balls, this.bat, this.playShot, null, this);
	}

	update() {
		if (this.balls.getChildren().length > 13) {
			this.balls.getFirstAlive().destroy();
		}
		this.checkRuns();
	}

	addBatCollider() {
		this.batC.setPosition(339, 629);
		this.tweens.add({
			targets: this.batC,
			duration: 500,
			angle: -90
		})
	}

	removeBatCollider() {
		this.batC.setAngle(0)
		this.batC.setPosition(0, 0);
		// this.batC.setPosition(319, 629);
	}

	checkRuns() {
		if (this.ballHit == true) {
			if (this.ball.y >= 875 && this.ball.y <= 1080 && this.ball.x >= 1720 && this.ball.x <= 1900) {
				this.ballHit = false;
				this.addRuns(1);
				this.startRunAnim(this.oneRun);
				this.ball.setVisible(false);
			}
			if (this.ball.y >= 640 && this.ball.y <= 874 && this.ball.x >= 1790 && this.ball.x <= 1900) {
				this.ballHit = false;
				this.addRuns(2);
				this.startRunAnim(this.twoRun);
				this.ball.setVisible(false);
			}
			if (this.ball.y >= 432 && this.ball.y <= 639 && this.ball.x >= 1805 && this.ball.x <= 1900) {
				this.ballHit = false;
				this.addRuns(3);
				this.startRunAnim(this.threeRun);
				this.ball.setVisible(false);
			}
			if (this.ball.y >= 230 && this.ball.y <= 431 && this.ball.x >= 1790 && this.ball.x <= 1900) {
				this.ballHit = false;
				this.addRuns(4);
				this.startRunAnim(this.fourRun);
				this.ball.setVisible(false);
			}
			if (this.ball.y >= 0 && this.ball.y <= 229 && this.ball.x >= 1720 && this.ball.x <= 1900) {
				this.ballHit = false;
				this.addRuns(6);
				this.startRunAnim(this.sixRun);
				this.ball.setVisible(false);
			}
		}
	}

	addRuns(newRun) {
		this.oSoundManager.playSound(this.oSoundManager.crowdClapping_sound);
		const children = this.children.list.filter(child => child.texture && child.texture.key === newRun.toString());
		const txt_newRun = this.add.text(children?.[0]?.x - 80, children?.[0]?.y, newRun, { fontSize: '124px', fontFamily: 'digital', color: '#fff', stroke: '#000', strokeThickness: 10 });
		txt_newRun.setOrigin(0.5, 0.5);
		this.tweens.add({
			targets: txt_newRun,
			duration: 500,
			x: this.runsText.x,
			y: this.runsText.y,
			scale: 0.5,
			ease: Phaser.Math.Easing.Sine.InOut,
			onComplete: () => {
				txt_newRun.destroy();
				let currentRun = this.runs;
				let targetRun = this.runs + newRun;

				// Create counter animation
				let counter = { value: currentRun };
				this.tweens.add({
					targets: counter,
					value: targetRun,
					duration: 500,
					ease: 'Linear',
					onUpdate: () => {
						this.runsText.setText(Math.floor(counter.value));
					},
					onComplete: () => {
						this.runs = targetRun;
						this.runsText.setText(this.runs);
						if (this.runs >= this.targetRuns) {
							const MESSAGE = Object.freeze({
								START_GAME: "start-game",
								LEVEL_UP: "level-up",
								END_GAME: "end-game"
							})
							const data = {
								sMessage: MESSAGE.END_GAME,
								nLevel: 0,
								nScore: 100,
							}
							window.parent.postMessage(JSON.stringify(data), "*");
							clearInterval(this.ballInterval);
							this.playAgainBtn.setVisible(true);
							this.playAgainBtn.setInteractive();
							this.stadiumBackground.disableInteractive();
							this.you_win.setVisible(true);
							this.oSoundManager.playSound(this.oSoundManager.crowdClapping_sound);
							this.tweens.add({
								targets: this.you_win,
								scale: 1,
								duration: 300,
								yoyo: true,
								repeat: 2,
								ease: 'Sine.easeInOut'
							});
						}
					}
				});
			}
		});
	}

	startRunAnim(target) {
		target.setTexture(`${target.texture.key}_highlight`);
		this.tweens.add({
			targets: target,
			scaleX: 1.8,
			scaleY: 1.8,
			duration: 300,
			yoyo: true,
			repeat: 2,
			ease: Phaser.Math.Easing.Sine.InOut,
			onComplete: () => {
				target.setTexture(target.texture.key.split('_')[0]);
			}
		});
	}

	playShot() {
		if (this.ball.x > 400) {
			this.shotVelocity = this.getShotVelocity();
			this.ball.setVelocity(1100, this.shotVelocity);
			this.ball.setDrag(0);
			this.ball.setGravityY(0);
			this.oSoundManager.playSound(this.oSoundManager.ballHit_sound);
		}
	}

	getShotVelocity() {
		this.playShotVelocity = [-700, -750, -800, -850, -900, -950, -1000, -1050, -1100, -1150, -1200, -1250];
		this.random = Math.floor(Math.random() * this.playShotVelocity.length);
		return this.playShotVelocity[this.random];
	}

	wicketFall() {
		this.wicketFallFlag = true;
		this.bat.setCircle(10, -100, -30)
		this.playAgainBtn.setVisible(true);
		this.playAgainBtn.setInteractive();
		this.stadiumBackground.disableInteractive();
		this.you_lose.setVisible(true);
		this.oSoundManager.playSound(this.oSoundManager.wicketHit_sound);
		const MESSAGE = Object.freeze({
			START_GAME: "start-game",
			LEVEL_UP: "level-up",
			END_GAME: "end-game"
		})
		const data = {
			sMessage: MESSAGE.END_GAME,
			nLevel: 0,
			nScore: 0,
		}
		window.parent.postMessage(JSON.stringify(data), "*");
		this.tweens.add({
			targets: this.you_lose,
			scale: 1,
			duration: 300,
			yoyo: true,
			repeat: 2,
			ease: 'Sine.easeInOut'
		});
		const wicketTween = (target, angle) => {
			this.tweens.add({
				targets: target,
				angle: angle,
				duration: 300,
				ease: 'Sine.easeInOut'
			});
		}
		wicketTween(this.wicket2, Phaser.Math.Between(-90, -30));
		wicketTween(this.wicket3, Phaser.Math.Between(-30, -15));
		this.setBallVelocityOnWicketFall();
	}

	setBallVelocityOnWicketFall() {
		this.ball.setVelocity(0);
		this.ball.setDrag(0);
		this.ball.setGravityY(0);
	}

	addBall() {
		if (this.wicketFallFlag == false) {
			this.ballHit = false;
			this.ball = this.physics.add.sprite(1900, 540, "ball");
			this.balls.add(this.ball);
			this.ball.setBounce(0.7);
			this.ball.setDrag(1);
			var velocity = this.getBallVelocity();
			this.ball.setVelocity(velocity, 0);
			this.ball.setScale(0.75);
		}
	}

	getBallVelocity() {
		this.ballVelocity = Phaser.Math.Between(-2000, -1600);
		return this.ballVelocity;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
