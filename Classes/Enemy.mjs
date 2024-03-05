export default class Enemy extends Phaser.GameObjects.Sprite {

    speed = 4;
    mainScene;

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite).setScale(0.3);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.mainScene = scene;
    }

    spawn() {
        this.setActive(true);
        this.setVisible(true);
        this.body.setEnable(true);
        this.body.reset(this.x, this.y);
    }

    update() {
        this.y += this.speed;

        if (this.y > 700) {
            this.mainScene.destroyEnemy(this);
            // console.log('enemy destroyed');
        }
    }
}