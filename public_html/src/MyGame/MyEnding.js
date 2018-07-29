/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!




function MyEnding(){
    
    this.BackgroundTexture = "assets/StartScene/background.png";
    this.CursorTexture = "assets/StartScene/CrownIcons_007.png";
    
    this.mBackground = null;
    this.Cursor = null;
    this.mCamera = null;
    this.mText = [];
    this.bgMsg = null;
    this.endingView = null;
    
    this.choice = 0;
    this.isShow = false;

    this.BGM = "assets/StartScene/PilotsOfStone.mp3";
    
    var AllEndings = [{name:"Ending 1: you are killed", pic:"assets/Endings/Ending_0.png", flag:true},{name:"Ending 2: starvation",pic:"assets/Endings/Ending_1.png", flag:true},
    {name:"Ending 3: apple",pic:"assets/Endings/Ending_2.png", flag:true},{name:"Ending 4: pass",pic:"assets/Endings/Ending_3.png", flag:true},
    {name:"Ending 5: giveup",pic:"assets/Endings/Ending_4.png", flag:false},{name:"Ending 6: prison",pic:"assets/Endings/Ending_5.png", flag:false},
    {name:"Ending 7: apple",pic:"assets/Endings/Ending_6.png", flag:true},{name:"Ending 8: pass",pic:"assets/Endings/Ending_7.png", flag:true},
    {name:"Ending 9: apple",pic:"assets/Endings/Ending_8.png", flag:true},{name:"Ending 10: pass",pic:"assets/Endings/Ending_9.png", flag:true},
    {name:"Ending 11: apple",pic:"assets/Endings/Ending_10.png", flag:true},{name:"Ending 12: pass",pic:"assets/Endings/Ending_11.png", flag:true},
    {name:"Ending 13: apple",pic:"assets/Endings/Ending_12.png", flag:true},{name:"Ending 14: pass",pic:"assets/Endings/Ending_13.png", flag:true},];

    var endings = gEngine.ResourceMap.retrieveAsset("endings");
    for(var i=0;i<13;i++)
        AllEndings[i].flag = endings[i];
    
    

}

//gEngine.Core.inheritPrototype(MyMenu, Scene);

MyEnding.prototype.loadScene = function () {
    //暂时没有图片
    gEngine.Textures.loadTexture(this.BackgroundTexture);
    gEngine.Textures.loadTexture(this.CursorTexture);
    for(var i=0;i<6;i++){
        gEngine.Textures.loadTexture(AllEndings[i].pic);
    }
    gEngine.AudioClips.loadAudio(this.BGM);

}

MyEnding.prototype.unloadScene = function () {

    //暂时没有图片
    gEngine.Textures.unloadTexture(this.BackgroundTexture);
    gEngine.Textures.unloadTexture(this.CursorTexture);
    for(var i=0;i<6;i++){
        gEngine.Textures.unloadTexture(AllEndings[i].pic);
    }

    gEngine.AudioClips.stopBackgroundAudio();
    gEngine.AudioClips.unloadAudio(this.BGM);
    var nextScene = new MyMenu();
    gEngine.Core.startScene(nextScene);
}

MyEnding.prototype.initialize = function () {
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        1
    );
    this.mCamera.setBackgroundColor([0,0.8,0.8,0]);
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
    
    gEngine.AudioClips.playBackgroundAudio(this.BGM);
    
    this.mBackground = new TextureRenderable(this.BackgroundTexture);
    this.mBackground.getXform().setSize(1800,600);
    this.mBackground.setColor([1,0,0,0]);
    this.mBackground.getXform().setPosition(505,300);
    
    this.Cursor = new TextureRenderable(this.CursorTexture);
    this.Cursor.getXform().setSize(70,90);
    this.Cursor.setColor([1,0,0,0]);
    this.Cursor.getXform().setPosition(150,500);

    for(var i=0;i<6;i++){
        var fr;
        if(AllEndings[i].flag)
            fr = new FontRenderable(AllEndings[i].name);
        else
            fr = new FontRenderable("     ???      ");
        fr.setColor([1,1,1,1]);
        fr.getXform().setPosition(200,500-i*70);
        fr.setTextHeight(35);
        this.mText.push(fr);
        
    }
//    this.mText1 = new FontRenderable("Start Game");
//    this.mText1.setColor([0,0,0,1]);
//    this.mText1.getXform().setPosition(900,250);
//    this.mText1.setTextHeight(35);
//    
//    this.mText2 = new FontRenderable("How to Play");
//    this.mText2.setColor([0,0,0,1]);
//    this.mText2.getXform().setPosition(900,180);
//    this.mText2.setTextHeight(35);
    
    this.bgMsg = new Renderable();
    this.bgMsg.getXform().setPosition(650,300);
    this.bgMsg.getXform().setSize(1100,500);
    this.bgMsg.setColor([0,0,0,0.2]);
}

MyEnding.prototype.draw = function () {
    gEngine.Core.clearCanvas([0,0,0,1]);

    this.mCamera.setupViewProjection();
    this.mBackground.draw(this.mCamera);
    this.bgMsg.draw(this.mCamera);
    this.Cursor.draw(this.mCamera);
    
    
    for(var i=0;i<6;i++){
        this.mText[i].draw(this.mCamera);
    }
    if(this.isShow==true){       
        this.endingView.draw(this.mCamera);
    }
}

MyEnding.prototype.update = function () {
    if(!this.isShow&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Esc)){
        gEngine.GameLoop.stop();
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)&&AllEndings[this.choice].flag){
        this.isShow=true;
        this.endingView = new TextureRenderable(AllEndings[this.choice].pic);
        this.endingView.getXform().setSize(1300,600);
        this.endingView.setColor([1,0,0,0]);
        this.endingView.getXform().setPosition(650,300);
    }
    if(this.isShow&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        this.isShow=false;
    }
    if(!this.isShow&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        this.choice = (this.choice+6-1)%6;
        //var temp = this.Cursor.getXform().mPosition;
        this.Cursor.getXform().setPosition(150,500-69*this.choice);
    }
    if(!this.isShow&&gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        this.choice = (this.choice+1)%6;
        this.Cursor.getXform().setPosition(150,500-69*this.choice);
    }
    
}



