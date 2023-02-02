import GameItems from "./GameItems.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.score = 0;
    this.scoreText;
    this.gameItemsGroup;
    this.gameItems;
    this.gameItemsOnScreen = [];
    this.promptText;
    this.gameOver;
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("1din", "assets/1-din.png");
    this.load.image("2din", "assets/2-din.png");
    this.load.image("5din", "assets/5-din.png");
    this.load.image("10din", "assets/10-din.png");
    this.load.image("20din", "assets/20-din.png");
    this.load.image("10din-paper", "assets/10-din-paper.png");
    this.load.image("20din-paper", "assets/20-din-paper.png");
    this.load.image("100din-paper", "assets/100-din-paper.png");
    this.load.image("200din-paper", "assets/200-din-paper.png");
    this.load.image("500din-paper", "assets/500-din-paper.png");
  }

  create() {
    this.gameOver = false;
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

    this.gameItems = new GameItems(this.physics.world, this);
    this.gameItems.initiate();

    this.input
      .setHitArea(this.gameItems.getChildren())
      .on("gameobjectup", (pointer, gameObject) => {
        if (!this.gameOver) {
          gameObject.clearTint();
          gameObject.setScale(0.3);
          if (
            gameObject.getData("value") >
              this.gameItems.gameItemsOnScreen[0].getData("value") ||
            gameObject.getData("value") >
              this.gameItems.gameItemsOnScreen[1].getData("value")
          ) {
            this.score++;
            this.scoreText.setText("score: " + this.score);
            this.gameItems.gameItemsOnScreen[0].setPosition(555, 555);
            this.gameItems.gameItemsOnScreen[0] =
              this.gameItems.gameItemsOnScreen[1];
            while (true) {
              this.gameItems.gameItemsOnScreen[1] = this.gameItems.items.at(
                Phaser.Math.Between(0, this.gameItems.items.length - 1)
              );
              if (
                this.gameItems.gameItemsOnScreen[0].getData("value") !==
                this.gameItems.gameItemsOnScreen[1].getData("value")
              ) {
                break;
              }
            }

            this.gameItems.gameItemsOnScreen[0].setPosition(200, 220);
            this.gameItems.gameItemsOnScreen[1].setPosition(600, 220);
          } else {
            this.scoreText.setText("");
            this.promptText.setText("");
            this.add.text(
              140,
              160,
              "You have failed!\nYour score is: " + this.score,
              {
                fontSize: "50px",
                fill: "#f00",
              }
            );
            this.gameOver = true;
          }
        }
      });

    this.input
      .setHitArea(this.gameItems.getChildren())
      .on("gameobjectdown", (pointer, gameObject) => {
        if (!this.gameOver) {
          gameObject.setTint(0xdddddd);
          gameObject.setScale(0.28);
        }
      });
    this.input.on("pointerdown", (pointer) => {
      if (this.gameOver) {
        this.scene.start("MainGame");
      }
    });
  }
}
