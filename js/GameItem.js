export default class GameItem extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, image, value) {
    super(scene, x, y, image);

    this.value = value;
  }
}
