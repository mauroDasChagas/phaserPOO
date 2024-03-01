// importando classes;
import Background from './Classes/Background.mjs';
import Player from './Classes/Player.mjs';

class Main extends Phaser.Scene {

    // variáveis que armazenarão as instâncias das classes;
    background;
    player;

    // construtor
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        // carregando imagens;
        this.load.image('background', './assets/background.png');
        this.load.image('player', './assets/player.png');
    }

    create() {
        this.setBackgroundInMainScene();
        this.setPlayerInMainScene();
    }

    setBackgroundInMainScene() {
        this.background = new Background(this, 400, 400, 'background');
        this.background.createBackground();
    }

    setPlayerInMainScene() {
        this.player = new Player(this, 400, 500, 'player', 0.3);
        this.player.createPlayer(this);
    }

    update() {
        this.player.move();
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