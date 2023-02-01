export default class GameItems extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.gameItemsOnScreen = [];
    this.allGameObjects = [];
  }

  initiate() {
    this.allGameObjects.push(
      this.create(100, 100, "1din").setScale(0.2).setData({ value: 1 })
    );
    this.allGameObjects.push(
      this.create(400, 400, "5din").setScale(0.2).setData({ value: 5 })
    );
  }
}
