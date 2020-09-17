var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    heigth: 640,
    pixelArt:true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
    
    scene: [inicio, level1, level2, winScene, looseScene]
    
  };
  
  var game = new Phaser.Game(config);
  var ghost;
  var ghostmove;
  var text;
  var player;
  var cursor_a;
  var cursor_d;
  var cursor_w;
  var cursor_s;
  var lvl1;
  var puntosLayer;
  var puntos2Layer;
  var puntosCollected = 0;
  
