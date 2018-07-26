/*
* GameOver.js
* Game over, start again
* 2018.7.24
*
*/

"use strict";

function GameOver() {
   // console.log();
    this.bgBackground = "";
    this.id = 0;
    this.mBackground = null;
    this.mCamera = null;
    this.mText = null;
    this.mHint = null;
    
    this.EndingTexture = ["assets/Endings/Ending_0.png","assets/Endings/Ending_1.png","assets/Endings/Ending_2.png"];
    this.Ending = null;
}

gEngine.Core.inheritPrototype(GameOver, Scene);

GameOver.prototype.loadScene = function () {
    //暂时没有图片
    //gEngine.Textures.loadTexture(this.bgBackground);
    gEngine.Textures.loadTexture(this.EndingTexture[this.id]);

}
GameOver.prototype.setId = function(Id){
    this.id = Id
}
GameOver.prototype.unloadScene = function () {

    //暂时没有图片
    // gEngine.Textures.unloadTexture(this.bgBackground);
    gEngine.Textures.unloadTexture(this.EndingTexture[this.id]);
    //开始游戏
    var mygame = new MyGame();
    gEngine.Core.startScene(mygame);
}

GameOver.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        0
    );
    this.mCamera.setBackgroundColor([1, 1, 1, 1.0]);
    
    this.Ending = new TextureRenderable(this.EndingTexture[this.id]);
    this.Ending.getXform().setSize(1300, 600);
    this.Ending.setColor([0, 0, 0, 0]);
    this.Ending.getXform().setPosition(650, 300);
    
  /*  this.mBackground = new Renderable();
    this.mBackground.getXform().setSize(100, 75);
    this.mBackground.setColor([0, 0, 0, 1]);
    this.mBackground.getXform().setPosition(50, 40);

    this.mText = new FontRenderable("Press SPACE to restart");
    this.mText.setColor([1, 1, 1, 1]);
    this.mText.getXform().setPosition(20, 30);
    this.mText.setTextHeight(5);

    this.mHint = new FontRenderable("YOU DIE");
    this.mHint.setColor([1, 1, 1, 1]);
    this.mHint.getXform().setPosition(30, 40);
    this.mHint.setTextHeight(10);*/

}

GameOver.prototype.draw = function () {
    gEngine.Core.clearCanvas([0, 0, 0, 1.0]);

    this.mCamera.setupViewProjection();
    this.Ending.draw(this.mCamera);
  /*  this.mBackground.draw(this.mCamera);
    this.mText.draw(this.mCamera);
    this.mHint.draw(this.mCamera);*/
}

GameOver.prototype.update = function () {
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)) {
        gEngine.GameLoop.stop();
    }
}