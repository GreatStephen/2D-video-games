/*
* MyMenu.js
* This file describe the menu
* 2018.7.24
*
*/

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
        [0, 0, 800, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8,0.8,0.8,1.0]);


}

MyMenu.prototype.draw = function () {

}

MyMenu.prototype.update = function () {
    
}