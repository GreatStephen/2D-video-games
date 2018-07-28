/*
 * File: MyPalace.js
 * This is the logic of our game.
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObject */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function MyPalace(isPrincessLocation, isPrincessAmbition) {

    // scene background
    this.bgForestTexture1 = "assets/Palace/palace1.png";
    this.bgForestTexture2 = "assets/Palace/palace2.png";
    this.bgForestTexture3 = "assets/Palace/palace3.png";
    this.bgForestTexture4 = "assets/Palace/palace4.png";
    this.BagTexture = "assets/bag.png";
    this.kKnight = "assets/Prince_new.png";
    this.CursorTexture = "assets/cursor.png";
    this.bgAttributeTexture = "assets/attribute.png";

    // event background
    this.EagleTexture = "assets/eagle.png";
    this.Mushroom = "assets/mushroom.png";
    this.Knight = "assets/Knight_New.png";
    this.TreeTexture = "assets/appletree.png";
    this.PondTexture = "assets/pond.png";
    this.RuinsTexture = "assets/ruins.png";
    this.HunterTexture = "assets/hunter.png";
    this.VillagerTexture = "assets/villager.png";
    this.WizardTexture = "assets/wizard.png";
    this.BusinessmanTexture = "assets/businessman.png";
    this.BeggarTexture = "assets/beggar.png";
    this.PrincessTexture = "assets/princess.png";

    // item texture
    this.apple = "assets/item/0_apple.png";
    this.meat = "assets/item/1_meat.png";
    this.fish = "assets/item/2_fish.png";
    this.herb = "assets/item/3_herb.png";
    this.timber = "assets/item/4_timber.png";
    this.axe = "assets/item/5_axe.png";
    this.spear = "assets/item/6_spear.png";
    this.sword = "assets/item/7_sword.png";
    this.shield1 = "assets/item/8_shield1.png";
    this.shield2 = "assets/item/9_shield2.png";
    this.secretbag = "assets/item/10_secretbag.png";
    this.cape = "assets/item/11_cape.png";
    this.key = "assets/item/12_key.png";
    this.treasurechest = "assets/item/13_treasurechest.png";


    this.IntroTexture = "assets/Intro.png";

    this.ending = -1;

    // audio
    this.BGM = "assets/MiddleEarth.mp3";

    // local variables

    this.bgPalace = "";
    this.bgForest = null;
    this.bgForest2 = null;
    this.bgForest3 = null;
    this.bgForest4 = null;
    this.bgForest5 = null;
    this.bgForest6 = null;
    this.bgForest7 = null;
    this.bgForest8 = null;
    this.bgForest9 = null;
    this.mBag = null;
    this.bgMsg = null;
    this.bgAttribute = null;
    this.mHero = null;
    this.mHealth = null;
    this.mHealthValue = 100;
    this.mHealthValueMax = 100;
    this.mHunger = null;
    this.mHungerValue = 100;
    this.mHungerValueMax = 100;
    this.mAttack = null;
    this.mAttackValue = 10;
    this.mDefense = null;
    this.mDefenseValue = 10;
    this.mMoneyTexture = null;
    this.mMoneyValue = 0;
    this.mMes1 = null;
    this.mMes2 = null;
    this.mMes3 = null;
    this.mMes4 = null;
    this.mMes5 = null;
    this.mMes6 = null;
    this.Intro = null;


    // cameras
    this.mCamera = null;
    this.attributeCamera = null;
    this.bagCamera = null;

    // flags
    this.isBagOpened = false;
    this.isMesOn = false;
    this.hasChosen = false;
    this.mEventIndex = 0;
    this.isIntroOpen = true;
    this.isPrincessLocation = false;
    this.isPrincessAmbition = false;
    this.isMeetPrincess = false;
    this.isPrincessLocation = isPrincessLocation;
    this.isPrincessAmbition = isPrincessAmbition;

    //counter
    this.mCounter = 0;

    //event
    this.mEventSet = null;
    this.mEventNum = 11;

    this.hungerRate = 1;
}
gEngine.Core.inheritPrototype(MyPalace, Scene);


MyPalace.prototype.loadScene = function () {
    
    gEngine.Textures.loadTexture(this.bgForestTexture1);
    gEngine.Textures.loadTexture(this.bgForestTexture2);
    gEngine.Textures.loadTexture(this.bgForestTexture3);
    gEngine.Textures.loadTexture(this.bgForestTexture4);
    gEngine.Textures.loadTexture(this.kKnight);
    gEngine.Textures.loadTexture(this.BagTexture);
    gEngine.Textures.loadTexture(this.CursorTexture);
    gEngine.Textures.loadTexture(this.bgAttributeTexture);
    gEngine.Textures.loadTexture(this.EagleTexture);
    gEngine.Textures.loadTexture(this.Mushroom);
    gEngine.Textures.loadTexture(this.Knight);
    gEngine.Textures.loadTexture(this.TreeTexture);
    gEngine.Textures.loadTexture(this.PondTexture);
    gEngine.Textures.loadTexture(this.RuinsTexture);
    gEngine.Textures.loadTexture(this.HunterTexture);
    gEngine.Textures.loadTexture(this.VillagerTexture);
    gEngine.Textures.loadTexture(this.WizardTexture);
    gEngine.Textures.loadTexture(this.BusinessmanTexture);
    gEngine.Textures.loadTexture(this.BeggarTexture);
    gEngine.Textures.loadTexture(this.PrincessTexture);


    gEngine.Textures.loadTexture(this.IntroTexture);
    // load audio
    gEngine.AudioClips.loadAudio(this.BGM);

    // load items
    gEngine.Textures.loadTexture(this.apple);
    gEngine.Textures.loadTexture(this.meat);
    gEngine.Textures.loadTexture(this.fish);
    gEngine.Textures.loadTexture(this.herb);
    gEngine.Textures.loadTexture(this.timber);
    gEngine.Textures.loadTexture(this.axe);
    gEngine.Textures.loadTexture(this.spear);
    gEngine.Textures.loadTexture(this.sword);
    gEngine.Textures.loadTexture(this.shield1);
    gEngine.Textures.loadTexture(this.shield2);
    gEngine.Textures.loadTexture(this.secretbag);
    gEngine.Textures.loadTexture(this.cape);
    gEngine.Textures.loadTexture(this.key);
    gEngine.Textures.loadTexture(this.treasurechest);




};

MyPalace.prototype.unloadScene = function () {

    gEngine.Textures.unloadTexture(this.bgForestTexture1);
    gEngine.Textures.unloadTexture(this.bgForestTexture2);
    gEngine.Textures.unloadTexture(this.bgForestTexture3);
    gEngine.Textures.unloadTexture(this.bgForestTexture4);
    gEngine.Textures.unloadTexture(this.kKnight);
    gEngine.Textures.unloadTexture(this.BagTexture);
    gEngine.Textures.unloadTexture(this.CursorTexture);
    gEngine.Textures.unloadTexture(this.bgAttributeTexture);
    gEngine.Textures.unloadTexture(this.EagleTexture);
    gEngine.Textures.unloadTexture(this.Mushroom);
    gEngine.Textures.unloadTexture(this.HunterTexture);
    gEngine.Textures.unloadTexture(this.VillagerTexture);
    gEngine.Textures.unloadTexture(this.WizardTexture);
    gEngine.Textures.unloadTexture(this.BusinessmanTexture);
    gEngine.Textures.unloadTexture(this.BeggarTexture);
    gEngine.Textures.unloadTexture(this.PrincessTexture);


    gEngine.Textures.unloadTexture(this.apple);
    gEngine.Textures.unloadTexture(this.meat);
    gEngine.Textures.unloadTexture(this.fish);
    gEngine.Textures.unloadTexture(this.herb);
    gEngine.Textures.unloadTexture(this.timber);
    gEngine.Textures.unloadTexture(this.axe);
    gEngine.Textures.unloadTexture(this.spear);
    gEngine.Textures.unloadTexture(this.sword);
    gEngine.Textures.unloadTexture(this.shield1);
    gEngine.Textures.unloadTexture(this.shield2);

    gEngine.Textures.unloadTexture(this.IntroTexture);

    gEngine.AudioClips.stopBackgroundAudio();
    gEngine.AudioClips.unloadAudio(this.BGM);


    var nextscene = null;
    if(this.ending>1){
        nextscene = new MyPalace();
    }
    else{
        nextscene = new GameOver();
        nextscene.id = this.ending;
        nextscene.setId(this.ending);
    }
    gEngine.Core.startScene(nextscene);// load next scene
};

MyPalace.prototype.initialize = function () {
    
    var temp = gEngine.ResourceMap.retrieveAsset("status");
    
    // setup the main camera
    this.mCamera = new Camera(
        vec2.fromValues(650, 300), // position of the camera
        1300,                     // width of camera
        [0, 0, 1300, 600],         // viewport (orgX, orgY, width, height)
        0
    );
    this.mCamera.setBackgroundColor([1, 1, 1, 1.0]);

    // setup attribute camera on the top-left corner
    this.attributeCamera = temp.attributeCamera;

    //setup bag camera
    this.bagCamera = temp.bagCamera;

    // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);

    gEngine.AudioClips.playBackgroundAudio(this.BGM);

    this.bgForest = new TextureRenderable(this.bgForestTexture1);
    this.bgForest.setColor([0,0,0,0]);
    this.bgForest.getXform().setSize(2000,600);
    this.bgForest.getXform().setPosition(1000,300);
    this.bgForest2 = new TextureRenderable(this.bgForestTexture2);
    this.bgForest2.setColor([0, 0, 0, 0]);
    this.bgForest2.getXform().setSize(2000,600);
    this.bgForest2.getXform().setPosition(3000,300);
    this.bgForest3 = new TextureRenderable(this.bgForestTexture3);
    this.bgForest3.setColor([0, 0, 0, 0]);
    this.bgForest3.getXform().setSize(2000,600);
    this.bgForest3.getXform().setPosition(5000,300);
    this.bgForest4 = new TextureRenderable(this.bgForestTexture4);
    this.bgForest4.setColor([0, 0, 0, 0]);
    this.bgForest4.getXform().setSize(2000,600);
    this.bgForest4.getXform().setPosition(7000,300);
    this.bgForest5 = new TextureRenderable(this.bgForestTexture1);
    this.bgForest5.setColor([0,0,0,0]);
    this.bgForest5.getXform().setSize(2000,600);
    this.bgForest5.getXform().setPosition(9000,300);
    this.bgForest6 = new TextureRenderable(this.bgForestTexture2);
    this.bgForest6.setColor([0, 0, 0, 0]);
    this.bgForest6.getXform().setSize(2000,600);
    this.bgForest6.getXform().setPosition(11000,300);
    this.bgForest7 = new TextureRenderable(this.bgForestTexture3);
    this.bgForest7.setColor([0, 0, 0, 0]);
    this.bgForest7.getXform().setSize(2000,600);
    this.bgForest7.getXform().setPosition(13000,300);
    this.bgForest8 = new TextureRenderable(this.bgForestTexture4);
    this.bgForest8.setColor([0, 0, 0, 0]);
    this.bgForest8.getXform().setSize(2000,600);
    this.bgForest8.getXform().setPosition(15000,300);
    this.bgForest9 = new TextureRenderable(this.bgForestTexture1);
    this.bgForest9.setColor([0, 0, 0, 0]);
    this.bgForest9.getXform().setSize(2000,600);
    this.bgForest9.getXform().setPosition(17000,300);

    this.mBag = temp.mBag;
    this.mBag.myGame = this;

    this.bgAttribute = temp.bgAttribute;
    this.mHealth = temp.mHealth;
    this.mHunger = temp.mHunger;
    this.mAttack = temp.mAttack;
    this.mDefense = temp.mDefense;
    this.mMoneyTexture = temp.mMoneyTexture;
    
    this.mHealthValue = temp.mHealthValue;
    this.mHealthValueMax = temp.mHealthValueMax;
    this.mHungerValue = temp.mHungerValue;
    this.mHungerValueMax = temp.mHungerValueMax;
    this.mAttackValue = temp.mAttackValue;
    this.mDefenseValue = temp.mDefenseValue;
    this.mMoneyValue = temp.mMoneyValue;
    this.ending = temp.ending;

    // message
    this.mMes1 = new FontRenderable("test");
    this.mMes1.setColor([1, 1, 1, 1]);
    this.mMes1.getXform().setPosition(10000, 10000);
    this.mMes1.setTextHeight(30);

    this.mMes2 = new FontRenderable("test");
    this.mMes2.setColor([1, 1, 1, 1]);
    this.mMes2.getXform().setPosition(10000, 10000);
    this.mMes2.setTextHeight(30);

    this.mMes3 = new FontRenderable("test");
    this.mMes3.setColor([1, 1, 1, 1]);
    this.mMes3.getXform().setPosition(10000, 10000);
    this.mMes3.setTextHeight(30);

    this.mMes4 = new FontRenderable("");
    this.mMes4.setColor([1, 1, 1, 1]);
    this.mMes4.getXform().setPosition(10000, 10000);
    this.mMes4.setTextHeight(30);

    this.mMes5 = new FontRenderable("");
    this.mMes5.setColor([1, 1, 1, 1]);
    this.mMes5.getXform().setPosition(11000, 11000);
    this.mMes5.setTextHeight(30);

    this.mMes6 = new FontRenderable("");
    this.mMes6.setColor([1, 1, 1, 1]);
    this.mMes6.getXform().setPosition(11000, 11000);
    this.mMes6.setTextHeight(30);

    // knight
    this.mKnight = new SpriteAnimateRenderable(this.kKnight);
    this.mKnight.setColor([1, 1, 1, 0]);
    this.mKnight.getXform().setPosition(600, 200);
    this.mKnight.getXform().setSize(500, 400);
    this.mKnight.setSpriteSequence(256, 0,      // first element pixel position: top-left 164 from 512 is top of image, 0 is left of image
        295, 256,       // widthxheight in pixels
        6,              // number of elements in this sequence
        0);             // horizontal padding in between
    this.mKnight.setAnimationType(SpriteAnimateRenderable.eAnimationType.eAnimateRight);
    this.mKnight.setAnimationSpeed(5);


    // message background
    this.bgMsg = new Renderable();
    this.bgMsg.getXform().setPosition(-650,-300);
    this.bgMsg.getXform().setSize(930,200);
    this.bgMsg.setColor([0,0,0,0.2]);

    //event, action and result
    //this.mEventSet = new EventPalaceSet(this.mEventNum);
    this.mEventSet = [];
    this.mEventSet.push(new EventPalace(1,this.isPrincessLocation, this.isPrincessAmbition, this.isMeetPrincess));

};

// This is the draw function, make sure to setup proper drawing environment, and more
// importantly, make sure to _NOT_ change any state.
MyPalace.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([1, 1, 1, 1.0]); // clear to light gray

    this.mCamera.setupViewProjection();


    this.bgForest.draw(this.mCamera);
    this.bgForest2.draw(this.mCamera);
    this.bgForest3.draw(this.mCamera);
    this.bgForest4.draw(this.mCamera);
    this.bgForest5.draw(this.mCamera);
    this.bgForest6.draw(this.mCamera);
    this.bgForest7.draw(this.mCamera);
    this.bgForest8.draw(this.mCamera);
    this.bgForest9.draw(this.mCamera);


    for(var i=0;i<this.mEventIndex+1;i++){
        if(this.mEventSet[i])
            this.mEventSet[i].icon.draw(this.mCamera);
    }
    this.mKnight.draw(this.mCamera);
    this.bgMsg.draw(this.mCamera);
    if(this.isMesOn==true){
        //this.bgBag.draw(this.mCamera);
        this.mMes1.draw(this.mCamera);
        this.mMes2.draw(this.mCamera);
        this.mMes3.draw(this.mCamera);
        this.mMes4.draw(this.mCamera);
        this.mMes5.draw(this.mCamera);
        this.mMes6.draw(this.mCamera);
    }



    this.attributeCamera.setupViewProjection();
    this.bgAttribute.draw(this.attributeCamera);
    this.mHealth.draw(this.attributeCamera);
    this.mHunger.draw(this.attributeCamera);
    this.mAttack.draw(this.attributeCamera);
    this.mDefense.draw(this.attributeCamera);
    this.mMoneyTexture.draw(this.attributeCamera);

    this.bagCamera.setupViewProjection();
    if(this.isBagOpened==true){
        this.mBag.Draw(this.bagCamera);
    }
};


MyPalace.kBoundDelta = 0.1;
MyPalace.prototype.update = function () {
    this.flag=0;

    var deltaX=10;
    //this.Eagle.updateAnimation();
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        if(this.isBagOpened==false && this.isMesOn==false){
            var center = this.mCamera.getWCCenter();
            center[0]+=deltaX;
            if(center[0]<16000){
                this.mCamera.setWCCenter(center[0],center[1]);
                // this.mBag.Move(deltaX);

            }
            else{
                center[0]-=deltaX;
            }

            var x=this.mKnight.getXform().mPosition;
            //console.log(x);
            if(x[0]<16650){
                this.mKnight.getXform().setPosition(x[0]+deltaX,x[1]);
            }
            else{
                this.ending = 3;
                this.EndGame();
            }

            // this.mKnight.draw(this.mCamera);
            this.flag=1;
        }

    }

    if(this.hasChosen && gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        this.isMesOn=false;
        this.bgMsg.getXform().setPosition(1000,1000);
        this.mMes1.getXform().setPosition(1000,1000);
        this.mMes2.getXform().setPosition(1000,1000);
        this.mMes3.getXform().setPosition(1000,1000);
        this.mMes4.getXform().setPosition(1000,1000);
        this.mMes5.getXform().setPosition(1000,1000);
        this.mMes6.getXform().setPosition(1000,1000);
    }

    if(this.isMesOn && !this.hasChosen && gEngine.Input.isKeyClicked(gEngine.Input.keys.One) && this.mEventSet[this.mEventIndex-1].action[0].content){
        console.log(this.mEventSet[this.mEventIndex-1].action[0]);
        this.hasChosen = true;
        var res = this.mEventSet[this.mEventIndex-1].action[0].getResult();
        console.log("res");
        console.log(res);
        var msg = res.apply(this, this.mEventSet[this.mEventIndex-1].enemy);
        this.SendMessage(msg,"","","","","");
    }
    if(this.isMesOn &&!this.hasChosen && gEngine.Input.isKeyClicked(gEngine.Input.keys.Two) && this.mEventSet[this.mEventIndex-1].action[1].content){
        //console.log(this.mEventSet[this.mEventIndex-1].action[1]);
        this.hasChosen = true;
        var res = this.mEventSet[this.mEventIndex-1].action[1].getResult();
        console.log("res");
        console.log(res);
        var msg = res.apply(this, this.mEventSet[this.mEventIndex-1].enemy);
        this.SendMessage(msg,"","","","","");
    }
    if(this.isMesOn &&!this.hasChosen && gEngine.Input.isKeyClicked(gEngine.Input.keys.Three) && this.mEventSet[this.mEventIndex-1].action[2].content){
        //console.log(this.mEventSet[this.mEventIndex-1].action[1]);
        this.hasChosen = true;
        var res = this.mEventSet[this.mEventIndex-1].action[2].getResult();
        console.log("res");
        console.log(res);
        res.apply(this, this.mEventSet[this.mEventIndex-1].enemy);
        this.SendMessage(res.msg,"","","","","");
    }
    if(this.isMesOn &&!this.hasChosen && gEngine.Input.isKeyClicked(gEngine.Input.keys.Four) && this.mEventSet[this.mEventIndex-1].action[3].content){
        //console.log(this.mEventSet[this.mEventIndex-1].action[1]);
        this.hasChosen = true;
        var res = this.mEventSet[this.mEventIndex-1].action[3].getResult();
        console.log("res");
        console.log(res);
        res.apply(this, this.mEventSet[this.mEventIndex-1].enemy);
        this.SendMessage(res.msg,"","","","","");
    }

    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.U)) {
        if(this.flag==1){
            this.flag=0;
        }
        else this.flag =1;
    }
    if(this.flag==1){
        this.mKnight.updateAnimation();
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.B)){
        if(this.isMesOn==false&&this.isBagOpened==false){
            //this.bagCamera.setViewport([450,200,300,300],0);
            this.isBagOpened=true;
        }
        else{
            //this.bagCamera.setViewport([1000,1000,300,300],0);
            this.isBagOpened=false;
        }
    }
    if(this.mEventIndex<this.mEventNum && this.mKnight.getXform().mPosition[0]>this.mEventSet[this.mEventIndex].icon.getXform().mPosition[0]-200){
        console.log(this.mEventSet[this.mEventIndex]);
        this.hasChosen = false;

        // pass through last knight
        if(this.mBag.GetItemIdx(11)!=-1){
            if(this.mEventIndex==15){
                var action = this.mEventSet[this.mEventIndex].action[2];
                action.setContent("3. I am a hunter, I have this cape!");
                action.setResult([AllResult[37]]);
            }
        }

        var info = this.mEventSet[this.mEventIndex].information;
        var act = this.mEventSet[this.mEventIndex].action;
        this.SendMessage(info, act[0].content, act[1].content,act[2].content,"","");
        this.mEventIndex++;
        if(this.mEventIndex<this.mEventNum)
            this.mEventSet.push(new EventPalace(this.mEventIndex,this.isPrincessLocation, this.isPrincessAmbition, this.isMeetPrincess));
        console.log(this.mEventSet);
    }

    if(this.isBagOpened==true){
        this.mBag.update();
    }

    for(var i=0;i<this.mEventIndex;i++){
        // console.log(this.mEventSet[i].type);
        if(this.mEventSet[i].type==1){
            this.mEventSet[i].icon.updateAnimation();
        }
    }

    this.mCounter++;
    if(this.mCounter%120==0){
        if(this.flag==1){
            this.hungerRate = 2;
        }           
        else{
            this.hungerRate = 1;
        }          
        this.mHungerValue-=this.hungerRate;
        if(this.mHungerValue<=0){
            //gEngine.GameLoop.stop();
            this.mHungerValue = 0;
            this.mHealthValue--;
        }
        this.mHunger.setText("Hunger: " + this.mHungerValue + "/"+this.mHungerValueMax);
        this.mHealth.setText("Health: " + this.mHealthValue + "/"+this.mHealthValueMax);
    }
    if(this.mHealthValue<=0){

        // if(this.mBag.GetItemIdx(0)==-1)  this.ending = 0;
        this.EndGame();
    }

    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Z)){
        this.ending = 4;
        this.EndGame();
    }

    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.R)){
        gEngine.GameLoop.stop();
        var nextscene = new MyPalace();
        gEngine.Core.startScene(nextscene);
    }
    this.mMoneyTexture.setText("Money: " + this.mMoneyValue);

};

//遇到事件后弹窗消息，只能按空格继续
MyPalace.prototype.EndGame = function(){
    if(this.ending==-1){
        this.ending = 1;
    }
    gEngine.ResourceMap.asyncLoadRequested("status");   
    gEngine.ResourceMap.asyncLoadCompleted("status",this);
    gEngine.GameLoop.stop();
}

MyPalace.prototype.SendMessage = function(line1, line2, line3, line4,line5, line6){
    var cameraCenter = this.mCamera.getWCCenter();
    this.bgMsg.getXform().setPosition(cameraCenter[0],cameraCenter[1]-150);
    var line11;
    if(line1.length>50){
        var idx=0;
        for(var i=0;i<50;i++){
            if(line1.charAt(i)==' '){
                idx = i;
            }
        }
        console.log(i);
        line11 = line1.slice(0,idx);
        line6 = line5;
        line5 = line4;
        line4 = line3;
        line3 = line2;
        line2 = line1.slice(idx+1);
    }else{
        line11 = line1;
    }

    this.mMes1.setText(line11);
    this.mMes1.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]+70-150);
    this.mMes2.setText(line2);
    this.mMes2.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]+35-150);
    if(typeof(line3)!="undefined")
        this.mMes3.setText(line3);
    this.mMes3.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]-0-150);
    if(typeof(line4) != "undefined")
        this.mMes4.setText(line4);
    this.mMes4.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]-35-150);
    if(typeof(line5) != "undefined")
        this.mMes5.setText(line5);
    this.mMes5.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]-70-150);
    if(typeof(line6) != "undefined")
        this.mMes6.setText(line6);
    this.mMes6.getXform().setPosition(cameraCenter[0]-450,cameraCenter[1]-105-150);


    this.isMesOn=true;
}

