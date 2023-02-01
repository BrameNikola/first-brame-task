import MainGame from "./MainGame.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  backgroundColor: "#ffffff",
  scene: [MainGame],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

let game = new Phaser.Game(config);
