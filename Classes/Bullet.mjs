export default class Bullet extends Phaser.GameObjects.Sprite {
    
    speed = 12;

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite).setScale(2);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    fire() {
        this.setActive(true);
        this.setVisible(true);
        this.body.setEnable(true);
        this.body.reset(this.x, this.y);
    }

    update() {
        this.y -= this.speed;

        if (this.y < 0) {
            this.destroy();
            // console.log('bullet destroyed');
        }
    }
}