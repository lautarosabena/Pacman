class looseScene extends Phaser.Scene {
    constructor() {
      super('looseScene');
    }
    preload(){
        this.load.json('pacman_anim', 'assets/images/pacman_anim.json');                
        this.load.atlas('pacman', 'assets/images/pacman.png','assets/images/pacman_atlas.json');
        this.load.image('loose', 'assets/images/loose.png'); 
        this.load.image('menubutton', 'assets/images/menu.png');
    }

    create(){
        
        var ganaste = this.add.image(400, 200, 'loose').setDisplaySize(350, 120);
        
        this.pacman_anim = this.cache.json.get('pacman_anim');
        this.anims.fromJSON(this.pacman_anim);

        

        var lvl1 = this.add.sprite(220, 380, 'pacman').setDisplaySize(140, 120);
        var lvl2 = this.add.sprite(570, 380, 'pacman').setDisplaySize(140, 120);
        var menu = this.add.image(390,500, 'menubutton').setDisplaySize(180, 60);;
        
        lvl1.anims.play('lvl1');
        lvl1.setInteractive();
        lvl1.on("pointerdown", () => {        
        
            this.scene.start('level1');
                    
        });
        lvl2.anims.play('lvl2');
        lvl2.setInteractive();
        lvl2.on("pointerdown", () => {        
        
            this.scene.start('level2');        
        });

        menu.setInteractive();
        menu.on("pointerdown", () => {          
            this.scene.start('inicio');
        });







        

    }
    

}