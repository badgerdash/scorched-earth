define([
    'phaser',
    'const'
], function (Phaser, Const) {
    'use strict';
    return function(){
      var root = this;

      this.start = function() {
        root.game = new Phaser.Game(
          // Const.overallWidth,
          // Const.overallHeight,
          Const.avail.width(),
          Const.avail.height(),
          Phaser.AUTO,
           '',
           {
            preload: root.preload,
            create: root.create,
            update: root.update
        });
      };
      this.create = function(){
        root.game.stage.backgroundColor = Const.bgColor ;
        // var logo = this.game.add.sprite(root.game.world.centerX, root.game.world.centerY, 'logo');
        root.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        root.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        root.game.scale.pageAlignHorizontally = true;
        root.game.scale.pageAlignVertically = true;
      };
      this.preload = function(){
        root.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');//  Load the Google WebFont Loader script
      };
      this.update = function(){
      };
    };
});
