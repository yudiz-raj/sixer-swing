class Boot extends Phaser.Scene {
	preload() {
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}

function startProject() {
	$("splashPage").hide();
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width: 1920,
		height: 1080,
		backgroundColor: "#ffffff",
		parent: 'game-division',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {
					y: 1000,
				},
				debug: false,
			}
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
		},
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
	game.scene.start("Boot", {});
}

$(document).ready(function () {
	startProject();
});