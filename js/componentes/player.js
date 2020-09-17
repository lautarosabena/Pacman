class playerClass extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, config.texture)
      this.setTexture(config.texture)
      
      
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);
            
      this.scene.events.on('update', this.update , this);
      
      
      config.scene.pacman_anim = config.scene.cache.json.get('pacman_anim');
      config.scene.anims.fromJSON(config.scene.pacman_anim);
      
      
      
      

    }
    update(){
      if (cursor_a.isDown) {
        player.setVelocityX(-170);
        player.anims.play('moveleft', true);
        } else if (cursor_a.isUp) {
        player.setVelocityX(0); 
        }
        if (cursor_d.isDown) {
        player.anims.play('moveright', true); 
        player.setVelocityX(170);
             
        }  
        if (cursor_s.isDown) {
        player.setVelocityY(170);
        player.anims.play('movedown', true);
        } else if (cursor_s.isUp) {
        player.setVelocityY(0); 
        if (cursor_w.isDown) {
        player.setVelocityY(-170);
        player.anims.play('moveup', true);        
    }  }
  }
}