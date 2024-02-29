// importando classes;
import Background from './Classes/Background.mjs';
import Player from './Classes/Player.mjs';

// definindo variáveis que armazenarão as instâncias das classes;
let background;
let player;

class Main extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        // carregando imagens;
        this.load.image('background', './assets/background.png');
        this.load.image('player', './assets/player.png');

        background = new Background(this, 400, 400, 'background');
        player = new Player(this, 100, 100, 'player', 0.3);
    }

    create() {
        // background;
        background.createBackground();

        // player;
        player.createPlayer();
    }

    update() {
        player.move();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Main,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    }
};

const game = new Phaser.Game(config);