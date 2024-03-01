export default class Player extends Phaser.GameObjects.Sprite {

    inputs;
    speed = 8;

    constructor(scene, x, y, sprite, scale) {
        super(scene, x, y, sprite).setScale(scale);
        this.inputs = scene.input.keyboard.createCursorKeys();
    }

    createPlayer(_scene) {
        _scene.add.existing(this);
        _scene.physics.add.existing(this);
        // this.setCollideWorldBounds(true);
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    move() {
        if(this.inputs.right.isDown) {
            this.moveRight();
            return;
        }

        if(this.inputs.left.isDown) {
            this.moveLeft();
            return;
        }

        if(this.inputs.up.isDown) {
            this.moveUp();
            return;
        }

        if(this.inputs.down.isDown) {
            this.moveDown();
            return;
        }
    }
}