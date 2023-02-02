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
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "10din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 10 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "20din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 20 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "100din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 100 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "200din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 200 })
    );
    this.gameItems.push(
      this.gameItemsGroup
        .create(555, 555, "500din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 500 })
    );

    this.input
      .setHitArea(this.gameItemsGroup.getChildren())
      .on("gameobjectup", (pointer, gameObject) => {
        if (!this.gameOver) {
          gameObject.clearTint();
          gameObject.setScale(0.3);
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
      .setHitArea(this.gameItemsGroup.getChildren())
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
