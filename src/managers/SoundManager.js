class SoundManager {
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj;
        this.isSoundOn = false;
        // this.isMusicOn = false;

        this.bg_music = this.oSceneObj.sound.add("bg_music").setVolume(0.2);
        this.click_sound = this.oSceneObj.sound.add("click_sound");
        this.ballHit_sound = this.oSceneObj.sound.add("ballHit_sound");
        this.crowdBackground_sound = this.oSceneObj.sound.add("crowdBackground_sound");
        this.crowdClapping_sound = this.oSceneObj.sound.add("crowdClapping_sound");
        this.wicketHit_sound = this.oSceneObj.sound.add("wicketHit_sound");
        // Start Code from Below here
    }
    // playMusic(key, loop) {
    //     if (this.isSoundOn) {
    //         key.play();
    //         key.loop = loop;
    //     }
    // }
    playSound(key, loop) {
        if (this.isSoundOn) {
            key.play();
            key.loop = loop;
        }
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}