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
    this.load.image("2din", "assets/2-din.png");
    this.load.image("5din", "assets/5-din.png");
    this.load.image("10din", "assets/10-din.png");
    this.load.image("20din", "assets/20-din.png");
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
    this.gameItems.push(
      this.gameItemsGroup
        .create(500, 500, "2din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 2 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(500, 500, "10din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 10 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(500, 500, "20din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 20 })
    );

    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "1din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 1 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "5din")
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
          this.gameItemsOnScreen[0].setPosition(555, 555);
          this.gameItemsOnScreen[0] = this.gameItemsOnScreen[1];
          while (true) {
            this.gameItemsOnScreen[1] = this.gameItems.at(
              Phaser.Math.Between(0, this.gameItems.length - 1)
            );
            if (
              this.gameItemsOnScreen[0].getData("value") !==
              this.gameItemsOnScreen[1].getData("value")
            ) {
              break;
            }
          }

          this.gameItemsOnScreen[0].setPosition(200, 220);
          this.gameItemsOnScreen[1].setPosition(600, 220);
          console.log(this.gameItemsOnScreen[0].getData("value"));
          console.log(this.gameItemsOnScreen[1].getData("value"));
        } else {
          this.score--;
          this.scoreText.setText("score: " + this.score);
          console.log(this.gameItemsOnScreen[0].getData("value"));
          console.log(this.gameItemsOnScreen[1].getData("value"));
        }
      });
  }
}
