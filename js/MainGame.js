import GameItem from "./GameItem.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.score = 0;
    this.scoreText;
  }

  preload() {
    this.load.image("background", "assets/background.png");
  }

  create() {
    this.add.image(0, 0, "background");
    this.score = 0;
    this.scoreText = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      fill: "#000",
    });
  }
}
