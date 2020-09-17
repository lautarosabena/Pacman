class level2 extends Phaser.Scene {
    constructor() {
    super('level2');      
  }
  
  preload() {        
    this.load.json('pacman_anim', 'assets/images/pacman_anim.json');                
    this.load.atlas('pacman', 'assets/images/pacman.png','assets/images/pacman_atlas.json');    
    this.load.image('tiles', 'assets/tilesets/tileset.png');    
    this.load.tilemapTiledJSON('map2', 'assets/tilemaps/level2.json');
    this.load.spritesheet('puntos', 'assets/tilesets/puntos.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('ghost', 'assets/images/ghost.png', { frameWidth: 64, frameHeight: 64 })
  }
  
  create() {     
    var map = this.make.tilemap({ key: 'map2' });
    var tileset = map.addTilesetImage('pacman', 'tiles');
    var puntosTiles = map.addTilesetImage('puntos');
             
    var platforms = map.createStaticLayer('Platforms', tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);
    puntosLayer = map.createDynamicLayer('puntos', puntosTiles, 0, 0);
    puntos2Layer = map.createDynamicLayer('puntos2', puntosTiles, 0, 0);

    puntosLayer.setTileIndexCallback(146, this.hitPuntos, this);
    puntos2Layer.setTileIndexCallback(147, this.hitPuntos2, this);       
      
      
    player = new playerClass({scene:this, x:63, y:64, texture: 'pacman'});
    this.physics.add.collider(player, platforms, playerClass.update);        
    this.physics.add.overlap(player, puntosLayer);
    this.physics.add.overlap(player, puntos2Layer);
      
    ghost = new ghostClass({scene:this, x:736, y:577, texture: 'ghost'});        
    this.physics.add.collider(ghost, platforms, ghostClass.update);
    this.physics.add.overlap(ghost, player, ghostClass.update);


    cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      

    text = this.add.text(42, 600, '', {
        fontSize: '20px',
        fill: '#ffff00'
       });
    text.setScrollFactor(0);
    this.updateText();

    var collider = this.physics.add.overlap(player, ghost, null, function (){
    this.gameOver(); 
    }, this);
      
      
      
  }
  gameOver(){
    puntosCollected = 0;
    this.scene.start('looseScene');
    

  }
  

  hitPuntos (sprite, tile)
  {   
    puntosLayer.removeTileAt(tile.x, tile.y);    
    puntosCollected += 1;
    this.updateText();
    return true;
  }

  hitPuntos2 (sprite, tile)
  {   
    puntos2Layer.removeTileAt(tile.x, tile.y);    
    puntosCollected += 5;
    this.updateText();
    return true;
  }

  updateText ()
  {
    text.setText(                      
    '\nScore: ' + puntosCollected            
  );}
  
  update(){
  if (puntosCollected == 149){
  this.scene.start('winScene')
  puntosCollected = 0;
  }
  }
  


}
