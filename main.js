(function () {
    'use strict';
    requirejs.config({
        paths: {
        	phaser:   ['//cdnjs.cloudflare.com/ajax/libs/phaser-ce/2.13.2/phaser.min'],
        },
        shim: {
        	'phaser': {
        		exports: 'Phaser'
        	},
          'const': {
            exports: 'Const'
          }
        }
    });

    require(['phaser', 'const', 'game'], function (Phaser, Const, Game) {
		new Game().start();
    });
}());
