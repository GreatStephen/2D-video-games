/*
* MyMenu.js
* This file describe the menu
* 2018.7.24
*
*/

"use strict";

function MyMenu(){

    this.bgBackground = "assets/StartScene/background.png";

    this.mBackground = null;
    this.back = null;
    this.mCamera = null;
    this.mText = null;

}

//gEngine.Core.inheritPrototype(MyMenu, Scene);

MyMenu.prototype.loadScene = function () {
    //暂时没有图片
    gEngine.Textures.loadTexture(this.bgBackground);

}

MyMenu.prototype.unloadScene = function () {

    //暂时没有图片
     gEngine.Textures.unloadTexture(this.bgBackground);

    //开始游戏
    var mygame = new MyGame();
    gEngine.Core.startScene(mygame);
}

MyMenu.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        0
    );
    this.mCamera.setBackgroundColor([1,1,1,0]);

    /*
    this.back = new TextureRenderable(this.bgBackground);
    this.back.getXform().setSize(1300,600);
    //this.back.setColor([1,1,1,0]);
    this.back.getXform().setPosition(650,300);
    */
    this.back = new Renderable();
    this.back.getXform().setSize(1300,600);
    this.back.getXform().setPosition(650,300);
    this.back.setColor([1,0,0,1.0]);

    /*
    this.mText = new FontRenderable("Press SPACE to start");
    this.mText.setColor([1,1,1,1]);
    this.mText.getXform().setPosition(650,1300);
    this.mText.setTextHeight(19);
    */

}

MyMenu.prototype.draw = function () {
    gEngine.Core.clearCanvas([0.9,0.9,0.9,1]);

    this.mCamera.setupViewProjection();

    this.back.draw(this.mCamera);
    //this.mText.draw(this.mCamera);
}

MyMenu.prototype.update = function () {
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        gEngine.GameLoop.stop();
    }
}