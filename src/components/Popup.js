
// You can write more code here

/* START OF COMPILED CODE */

class Popup extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle
		const rectangle = scene.add.rectangle(0, 0, 1920, 1080);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.5;
		this.add(rectangle);

		// container_popup
		const container_popup = scene.add.container(0, 0);
		container_popup.scaleX = 0;
		container_popup.scaleY = 0;
		this.add(container_popup);

		// info_popup
		const info_popup = scene.add.image(0, 0, "info_popup");
		container_popup.add(info_popup);

		// ball
		const ball = scene.add.image(-230, -37, "ball");
		ball.scaleX = 0.8;
		ball.scaleY = 0.8;
		container_popup.add(ball);

		// text_1
		const text_1 = scene.add.text(-196, -43, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "Your goal is to score the required number of runs shown on the screen.";
		text_1.setStyle({ "color": "#ffffffff", "fontFamily": "digital", "fontSize": "28px", "stroke": "#ffffffff" });
		text_1.setWordWrapWidth(480);
		container_popup.add(text_1);

		// text_2
		const text_2 = scene.add.text(-196, 32, "", {});
		text_2.setOrigin(0, 0.5);
		text_2.text = "Tap or click the screen to play a shot.";
		text_2.setStyle({ "color": "#ffffffff", "fontFamily": "digital", "fontSize": "28px", "stroke": "#ffffffff" });
		text_2.setWordWrapWidth(480);
		container_popup.add(text_2);

		// ball_1
		const ball_1 = scene.add.image(-230, 34, "ball");
		ball_1.scaleX = 0.8;
		ball_1.scaleY = 0.8;
		container_popup.add(ball_1);

		// text_3
		const text_3 = scene.add.text(-196, 107, "", {});
		text_3.setOrigin(0, 0.5);
		text_3.text = "You can score 1, 2, 3, 4, or 6 runs depending on how well you time ball.";
		text_3.setStyle({ "color": "#ffffffff", "fontFamily": "digital", "fontSize": "28px", "stroke": "#ffffffff" });
		text_3.setWordWrapWidth(480);
		container_popup.add(text_3);

		// ball_2
		const ball_2 = scene.add.image(-230, 111, "ball");
		ball_2.scaleX = 0.8;
		ball_2.scaleY = 0.8;
		container_popup.add(ball_2);

		// text
		const text = scene.add.text(0, -147, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "HOW TO PLAY";
		text.setStyle({ "align": "center", "color": "#3b28a5ff", "fontFamily": "digital", "fontSize": "64px", "fontStyle": "bold" });
		container_popup.add(text);

		this.rectangle = rectangle;
		this.container_popup = container_popup;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Container} */
	container_popup;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
