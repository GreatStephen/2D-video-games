/*
* GameOver.js
* Game over, start again
* 2018.7.24
*
*/

"use strict";

function GameOver() {

    this.bgBackground = "";

    this.mBackground = null;
    this.mCamera = null;
    this.mText = null;
    this.mHint = null;

}

gEngine.Core.inheritPrototype(GameOver, Scene);

GameOver.prototype.loadScene = function () {
    //暂时没有图片
    //gEngine.Textures.loadTexture(this.bgBackground);

}

GameOver.prototype.unloadScene = function () {

    //暂时没有图片
    // gEngine.Textures.unloadTexture(this.bgBackground);

    //开始游戏
    var mygame = new MyMenu();
    gEngine.Core.startScene(mygame);
}

GameOver.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 1300, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1.0]);

    this.mBackground = new Renderable();
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
    this.mHint.setTextHeight(10);

}

GameOver.prototype.draw = function () {
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]);

    this.mCamera.setupViewProjection();

    this.mBackground.draw(this.mCamera);
    this.mText.draw(this.mCamera);
    this.mHint.draw(this.mCamera);
}

GameOver.prototype.update = function () {
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)) {
        gEngine.GameLoop.stop();
    }
}