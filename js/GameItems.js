import GameItem from "./GameItem.js";

export default class GameItems extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.gameItemsOnScreen = [];
    this.items = [];
  }

  initiate() {
    this.test = "20din-paper";
    console.log(parseInt(this.test.match(/\d+/)[0]));

    this.addMultiple([
      new GameItem(this.scene, 200, 220, "1din"),
      new GameItem(this.scene, 600, 220, "2din"),
      new GameItem(this.scene, 700, 700, "5din"),
      new GameItem(this.scene, 700, 700, "10din"),
      new GameItem(this.scene, 700, 700, "20din"),
      new GameItem(this.scene, 700, 700, "10din-paper"),
      new GameItem(this.scene, 700, 700, "20din-paper"),
      new GameItem(this.scene, 700, 700, "100din-paper"),
      new GameItem(this.scene, 700, 700, "200din-paper"),
      new GameItem(this.scene, 700, 700, "500din-paper"),
    ]);

    console.log(this.getChildren().length);
    for (let i = 0; i < this.getChildren().length; i++) {
      this.getChildren()[i].initiate();
      console.log(this.getChildren()[i].value);
    }

    this.gameItemsOnScreen[0] = this.getChildren()[0];
    this.gameItemsOnScreen[1] = this.getChildren()[1];
  }
}
