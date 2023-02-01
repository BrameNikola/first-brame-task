import MainGame from "./MainGame.js";

const config = {
    type: Phaser.AUTO,
    width: 780,
    height: 360,
    backgroundColor: "#639bff",
    scene: MainGame,
    physics: {
      default: "arcade",
      arcade: { debug: false },
    },
  };
  
  let game = new Phaser.Game(config);