export default class Background {
    constructor(scene, height, width, sprite) {
        // properties;
        this.scene = scene;
        this.height = height;
        this.width = width;
        this.sprite = sprite;
    }

    getProperties() {
        return {
            scene: this.scene,
            height: this.height,
            width: this.width,
            sprite: this.sprite
        };
    }

    createBackground() {
        const { scene, height, width, sprite } = this.getProperties();
        scene.add.image(height, width, sprite);
    }
}