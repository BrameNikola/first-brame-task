// import GameItems from "./GameItems.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.score = 0;
    this.scoreText;
    this.gameItemsGroup;
    this.gameItems;
    this.gameItemsOnScreen = [];
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("1din", "assets/1-din.png");
    this.load.image("5din", "assets/5-din.png");
  }

  create() {
    this.gameItemsOnScreen = [];
    this.gameItems = [];
    this.add.image(0, 0, "background").setOrigin(0, 0).setScale(2);
    this.score = 0;
    this.scoreText = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      fill: "#000",
    });

    this.promptText = this.add.text(
      25,
      80,
      "Click on the item you think has bigger value:",
      {
        fontSize: "24px",
        fill: "#000",
      }
    );

    this.gameItemsGroup = this.physics.add.group();
    this.gameItemsOnScreen.push(
      this.gameItemsGroup
        .create(200, 220, "1din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 1 })
    );
    this.gameItemsOnScreen.push(
      this.gameItemsGroup
        .create(600, 220, "5din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 5 })
    );

    this.input
      .setHitArea(this.gameItemsGroup.getChildren())
      .on("gameobjectdown", (pointer, gameObject) => {
        if (
          gameObject.getData("value") >
            this.gameItemsOnScreen[0].getData("value") ||
          gameObject.getData("value") >
            this.gameItemsOnScreen[1].getData("value")
        ) {
          this.score++;
          this.scoreText.setText("score: " + this.score);
        } else {
          this.score--;
          this.scoreText.setText("score: " + this.score);
        }
      });
  }
}
