class ghostClass extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, config.texture)
      this.setTexture(config.texture)
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);      
      this.scene.events.on('update', this.update , this);
      this.body.setVelocityX(-170);    
      

      config.scene.anims.create({
        key: 'ghostmoveup',
        repeat: -1,
        frameRate: 4,
        frames: config.scene.anims.generateFrameNames('ghost', {Start: 4, end: 5})    

      });

      config.scene.anims.create({
        key: 'ghostmoveright',
        repeat: -1,
        frameRate: 4,
        frames: config.scene.anims.generateFrameNames('ghost', {Start: 0, end: 1})     
      });
      config.scene.anims.create({
          key: 'ghostmoveleft',
          repeat: -1,
          frameRate: 4,
          frames: config.scene.anims.generateFrameNames('ghost', {Start: 2, end: 3})     

      });
      config.scene.anims.create({
          key: 'ghostmovedown',
          repeat: -1,
          frameRate: 4,
          frames: config.scene.anims.generateFrameNames('ghost', {Start: 6, end: 7})     

      });    

      

    }
    update(){
      var numaleat = Phaser.Math.Between(1,300);
      if (numaleat >= 297){
        ghostmove = Phaser.Math.Between(1,4);
        if(ghostmove == 1 && ghostmove != 2){            
          ghost.body.setVelocityY(170);
          ghost.play('ghostmoveup');                                 
        }
        if(ghostmove == 2){
          ghost.body.setVelocityY(-170);          
          ghost.play('ghostmovedown');
        }
        if(ghostmove == 3){
          ghost.body.setVelocityX(170);
          ghost.play('ghostmoveright');
        }
        if(ghostmove == 4){
          ghost.body.setVelocityX(-170);
          ghost.play('ghostmoveleft');
        }
      }
    }
  
    
  

}