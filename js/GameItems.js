export default class GameItems extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.gameItemsOnScreen = [];
    this.items = [];
  }

  initiate() {
    // this.gameItemsGroup = this.physics.add.group();
    this.gameItemsOnScreen.push(
      this.create(200, 220, "1din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 1 })
    );
    this.gameItemsOnScreen.push(
      this.create(600, 220, "5din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 5 })
    );
    this.items.push(
      this.create(500, 500, "2din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 2 })
    );
    this.items.push(
      this.create(500, 500, "10din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 10 })
    );
    this.items.push(
      this.create(500, 500, "20din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 20 })
    );

    this.items.push(
      this.create(555, 555, "1din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 1 })
    );
    this.items.push(
      this.create(555, 555, "5din")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 5 })
    );
    this.items.push(
      this.create(555, 555, "10din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 10 })
    );
    this.items.push(
      this.create(555, 555, "20din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 20 })
    );
    this.items.push(
      this.create(555, 555, "100din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 100 })
    );
    this.items.push(
      this.create(555, 555, "200din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 200 })
    );
    this.items.push(
      this.create(555, 555, "500din-paper")
        .setScale(0.3)
        .refreshBody()
        .setData({ value: 500 })
    );
  }
}
