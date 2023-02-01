import MainGame from "./MainGame.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#ffffff",
  scene: [MainGame],
};

let game = new Phaser.Game(config);
