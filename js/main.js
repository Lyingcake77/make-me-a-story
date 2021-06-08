/**
 * Created by lyingcake77 on 06-08-2021.
 */
//noinspection JSCheckFunctionSignatures,JSCheckFunctionSignatures,JSCheckFunctionSignatures
var game = new Phaser.Game(24*32, 17*32, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game',Game);
game.state.start('Game');