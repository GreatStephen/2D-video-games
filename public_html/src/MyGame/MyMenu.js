/*
* MyMenu.js
* This file describe the menu
* 2018.7.24
*
*/

"use strict";

function MyMenu(){

    this.bgBackground = "assets/StartScene/background.png";
    this.Cursor = "assets/StartScene/CrownIcons_007.png";
    this.mBackground = null;
    this.back = null;
    this.mCamera = null;
    this.mText1 = null;
    this.mText2 = null;
    this.mText3 = null;
    
    this.choice = 0;

}

//gEngine.Core.inheritPrototype(MyMenu, Scene);

MyMenu.prototype.loadScene = function () {
    //暂时没有图片
    gEngine.Textures.loadTexture(this.bgBackground);
    gEngine.Textures.loadTexture(this.Cursor);
}

MyMenu.prototype.unloadScene = function () {

    //暂时没有图片
     gEngine.Textures.unloadTexture(this.bgBackground);
     gEngine.Textures.unloadTexture(this.Cursor);
    //开始游戏
    var mygame = new MyGame();
    gEngine.Core.startScene(mygame);
}

MyMenu.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        1
    );
    this.mCamera.setBackgroundColor([0,0.8,0.8,0]);
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
    
    this.mBackground = new TextureRenderable(this.bgBackground);
    this.mBackground.getXform().setSize(1800,600);
    this.mBackground.setColor([1,0,0,0]);
    this.mBackground.getXform().setPosition(450,300);
    
    this.Cursor = new TextureRenderable(this.Cursor);
    this.Cursor.getXform().setSize(70,90);
    this.Cursor.setColor([1,0,0,0]);
    this.Cursor.getXform().setPosition(830,250);

    this.mText1 = new FontRenderable("Start Game");
    this.mText1.setColor([0,0,0,1]);
    this.mText1.getXform().setPosition(900,250);
    this.mText1.setTextHeight(35);
    
    this.mText2 = new FontRenderable("Help");
    this.mText2.setColor([0,0,0,1]);
    this.mText2.getXform().setPosition(900,180);
    this.mText2.setTextHeight(35);
    
    this.mText3 = new FontRenderable("Endings Overview");
    this.mText3.setColor([0,0,0,1]);
    this.mText3.getXform().setPosition(900,110);
    this.mText3.setTextHeight(35);

}

MyMenu.prototype.draw = function () {
    gEngine.Core.clearCanvas([0,0,0,1]);

    this.mCamera.setupViewProjection();
    this.mBackground.draw(this.mCamera);
    this.Cursor.draw(this.mCamera);
    this.mText1.draw(this.mCamera);
    this.mText2.draw(this.mCamera);
    this.mText3.draw(this.mCamera);
}

MyMenu.prototype.update = function () {
    if(this.choice==0&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        gEngine.GameLoop.stop();
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        var temp = this.Cursor.getXform().mPosition;
        if(this.choice>0){           
            this.Cursor.getXform().setPosition(temp[0],temp[1]+67);
            this.choice -= 1;
        }
        else{
            this.Cursor.getXform().setPosition(temp[0],temp[1]-67*2);
            this.choice = 2;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        var temp = this.Cursor.getXform().mPosition;
        if(this.choice<2){
            var temp = this.Cursor.getXform().mPosition;
            this.Cursor.getXform().setPosition(temp[0],temp[1]-67);
            this.choice += 1;
        }
        else{
            this.Cursor.getXform().setPosition(temp[0],temp[1]+67*2);
            this.choice = 0;
        }
    }
}
