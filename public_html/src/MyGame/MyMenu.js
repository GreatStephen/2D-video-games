/*
* MyMenu.js
* This file describe the menu
* 2018.7.24
*
*/

"use strict";

function MyMenu(){

    this.bgBackground = "";

    this.mBackground = null;
    this.mCamera = null;
    this.mText = null;

}

gEngine.Core.inheritPrototype(MyMenu, Scene);

MyMenu.prototype.loadScene = function () {
    //暂时没有图片
    //gEngine.Textures.loadTexture(this.bgBackground);

}

MyMenu.prototype.unloadScene = function () {

    //暂时没有图片
    // gEngine.Textures.unloadTexture(this.bgBackground);

    //开始游戏
    var mygame = new MyGame();
    gEngine.Core.startScene(mygame);
}

MyMenu.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 1300, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8,0.8,0.8,1.0]);

    this.mBackground = new Renderable();
    this.mBackground.getXform().setSize(100,75);
    this.mBackground.setColor([0,0,0,1]);
    this.mBackground.getXform().setPosition(50,40);

    this.mText = new FontRenderable("Press SPACE to start");
    this.mText.setColor([1,1,1,1]);
    this.mText.getXform().setPosition(20,30);
    this.mText.setTextHeight(5);

}

MyMenu.prototype.draw = function () {
    gEngine.Core.clearCanvas([0.9,0.9,0.9,1.0]);

    this.mCamera.setupViewProjection();

    this.mBackground.draw(this.mCamera);
    this.mText.draw(this.mCamera);
}

MyMenu.prototype.update = function () {
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        gEngine.GameLoop.stop();
    }
}