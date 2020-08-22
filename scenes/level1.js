class level1 extends Phaser.Scene {
    constructor() {
      super('level1');
      
    }


    preload() {
        
        this.load.json('pacman_anim', 'assets/images/pacman_anim.json');                
        this.load.atlas('pacman', 'assets/images/pacman.png','assets/images/pacman_atlas.json');    
        this.load.image('tiles', 'assets/tilesets/tileset.png');    
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');
    }
    
    create() {       
        this.pacman_anim = this.cache.json.get('pacman_anim');
        this.anims.fromJSON(this.pacman_anim);
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('pacman', 'tiles');
        const platforms = map.createStaticLayer('Platforms', tileset, 0, 0);
        platforms.setCollisionByExclusion(-1, true);        
        this.player = this.physics.add.sprite(63, 64, 'pacman');        
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);

        
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update() {        
        if (this.cursors.left.isDown) {
        this.player.setVelocityX(-140);
        this.player.anims.play('moveleft', true);
        } else if (this.cursors.left.isUp) {
        this.player.setVelocityX(0); 
        }
        if (this.cursors.right.isDown) {
        this.player.anims.play('moveright', true); 
        this.player.setVelocityX(140);
             
        }  
        if (this.cursors.down.isDown) {
        this.player.setVelocityY(140);
        this.player.anims.play('movedown', true);
        } else if (this.cursors.down.isUp) {
        this.player.setVelocityY(0); 
        if (this.cursors.up.isDown) {
        this.player.setVelocityY(-140);
        this.player.anims.play('moveup', true);        
    }  }
    }
}