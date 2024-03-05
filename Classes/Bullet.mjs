export default class Bullet extends Phaser.GameObjects.Sprite {
    
    speed = 10;

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite).setScale(2);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    update() {
        this.y -= this.speed;

        if (this.y < 0) {
            this.destroy();
        }
    }
}