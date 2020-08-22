const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    heigth: 640,
    pixelArt:true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: true,
      },
    },
    
    scene: [inicio, level1, level2]
    
  };
  
  const game = new Phaser.Game(config);
  
