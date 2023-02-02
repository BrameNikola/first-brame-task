import GameItem from "./GameItem.js";

export default class GameItems extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.gameItemsOnScreen = [];
    this.items = [];
  }

  initiate() {
    this.addMultiple([
      new GameItem(this.scene, 700, 700, "1din"),
      new GameItem(this.scene, 700, 700, "2din"),
      new GameItem(this.scene, 700, 700, "5din"),
      new GameItem(this.scene, 700, 700, "10din"),
      new GameItem(this.scene, 700, 700, "20din"),
      new GameItem(this.scene, 700, 700, "10din-paper"),
      new GameItem(this.scene, 700, 700, "20din-paper"),
      new GameItem(this.scene, 700, 700, "100din-paper"),
      new GameItem(this.scene, 700, 700, "200din-paper"),
      new GameItem(this.scene, 700, 700, "500din-paper"),
    ]);

    for (let i = 0; i < this.getChildren().length; i++) {
      this.getChildren()[i].initiate();
    }

    this.generateItemsOnScreen();
  }

  generateItemsOnScreen() {
    if (!this.gameItemsOnScreen[0]) {
      this.gameItemsOnScreen[0] = this.getChildren().at(
        Phaser.Math.Between(0, this.getChildren().length - 1)
      );
    } else {
      this.gameItemsOnScreen[0].setPosition(555, 555);
      this.gameItemsOnScreen[0] = this.gameItemsOnScreen[1];
    }
    while (true) {
      this.gameItemsOnScreen[1] = this.getChildren().at(
        Phaser.Math.Between(0, this.getChildren().length - 1)
      );
      if (this.gameItemsOnScreen[0].value !== this.gameItemsOnScreen[1].value) {
        break;
      }
    }
    this.gameItemsOnScreen[0].setPosition(200, 220);
    this.gameItemsOnScreen[1].setPosition(600, 220);
  }
}
