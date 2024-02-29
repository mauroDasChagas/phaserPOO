class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite, scale) {
        super(scene, x, y, sprite, scale);

        // properties;
        this.scene = scene;
        this.x = x
        this.y = y;
        this.sprite = sprite;
        this.scale = scale;

        this.inputs = this.scene.input.keyboard.createCursorKey();
    }

    getProperties() {
        return {
            scene: this.scene,
            x: this.x,
            y: this.y,
            sprite: this.sprite,
            scale: this.scale,
            inputs: this.inputs
        };
    }

    createPlayer() {
        const { scene, x, y, sprite, scale } = this.getProperties();
        const playerSprite = scene.physics.add.sprite(x, y, sprite);
        playerSprite.setScale(scale);
    }

    move() {
        const { inputs } = this.getProperties();

        if (inputs.left.isDown) {
            this.setVelocityX(-150);
        } else if (inputs.right.isDown) {
            this.setVelocityX(150);
        } else {
            this.setVelocityX(0);
        }

        if (inputs.down.isDown) {
            this.setVelocityY(-150);
        } else if (inputs.up.isDown) {
            this.setVelocityY(150);
        } else {
            this.setVelocityY(0);
        }
    }
}

export default Player;