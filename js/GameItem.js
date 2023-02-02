export default class GameItem extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, image) {
    super(scene, x, y, image);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.value = parseInt(image.match(/\d+/)[0]);
  }

  initiate() {
    this.setScale(0.3);
    this.refreshBody();
  }
}
