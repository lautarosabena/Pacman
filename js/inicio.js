class inicio extends Phaser.Scene {
    constructor() {
      super('inicio');
    }
    preload(){
        this.load.json('pacman_anim', 'assets/images/pacman_anim.json');                
        this.load.atlas('pacman', 'assets/images/pacman.png','assets/images/pacman_atlas.json'); 
    }

    create(){
        
        var titulo = this.add.sprite(420, 180, 'pacman').setDisplaySize(250, 130);
        
        var InstruccionesTxt = this.add.text(275, 330, 'Juega con W, A, S, D.', {fill: '#ffffff' });
        var Instrucciones2Txt = this.add.text(130, 400, 'Recoge todos los puntos sin que te atrape el fantasma!', {fill: '#ffffff' });
        
        this.pacman_anim = this.cache.json.get('pacman_anim');
        this.anims.fromJSON(this.pacman_anim);

        titulo.anims.play('titulo');

        var lvl1 = this.add.sprite(200, 560, 'pacman').setDisplaySize(140, 120);
        var lvl2 = this.add.sprite(550, 560, 'pacman').setDisplaySize(140, 120);
        
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





        

    }
    

}