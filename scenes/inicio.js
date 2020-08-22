class inicio extends Phaser.Scene {
    constructor() {
      super('inicio');
    }
    preload(){
        this.load.json('pacman_anim', 'assets/images/pacman_anim.json');                
        this.load.atlas('pacman', 'assets/images/pacman.png','assets/images/pacman_atlas.json'); 
    }

    create(){
        
        var titulo = this.add.sprite(400, 200, 'pacman').setDisplaySize(200, 80);
        var InstruccionesTxt = this.add.text(220, 400, 'Juega con las flechas del teclado.', {fill: '#ffffff' });
        this.pacman_anim = this.cache.json.get('pacman_anim');
        this.anims.fromJSON(this.pacman_anim);

        titulo.anims.play('titulo');

        var lvl1 = this.add.sprite(200, 520, 'pacman').setDisplaySize(180, 90);
        var lvl2 = this.add.sprite(550, 520, 'pacman').setDisplaySize(180, 90);
        
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