// importando classes;
import Background from './Classes/Background.mjs';
import Player from './Classes/Player.mjs';
import Enemy from './Classes/Enemy.mjs'

class Main extends Phaser.Scene {

    // variáveis que armazenarão as instâncias das classes;
    background;
    player;
    enemies;

    // variável de controle para os inimigos;
    numEnemiesInScene = 0;

    // construtor;
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        // carregando imagens;
        this.load.image('background', './assets/background.png');
        this.load.image('player', './assets/player.png');
        this.load.image('bullet', './assets/bullet.png');
        this.load.image('enemy', './assets/enemy.png');
    }

    create() {
        this.setBackgroundInMainScene();
        this.setPlayerInMainScene();
        this.setEnemiesInMainScene();
    }

    setBackgroundInMainScene() {
        this.background = new Background(this, 400, 400, 'background');
        this.background.createBackground();
    }

    setPlayerInMainScene() {
        this.player = new Player(this, 400, 500, 'player', 0.3);
        this.player.createPlayer(this);
    }

    setEnemiesInMainScene() {
        this.enemies = this.physics.add.group({ classType: Enemy, runChildUpdate: true });
    }

    generateRandomEnemies() {
        if (this.numEnemiesInScene >= 10) {
            return;
        } else {
            const enemy = this.enemies.get(Math.random() * 900, -20, 'enemy');

            if (enemy) {
                enemy.spawn();
            }

            this.numEnemiesInScene++;
        }
    }

    update() {
        // movimentos do jogador;
        this.player.move();
        this.player.shoot('bullet');
        this.generateRandomEnemies();
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