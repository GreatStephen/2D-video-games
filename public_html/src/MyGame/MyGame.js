/*
 * File: MyGame.js 
 * This is the logic of our game. 
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObject */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function MyGame() {
/*
    this.kMinionSprite = "assets/minion_sprite.png";

    this.kPlatformTexture = "assets/platform.png";
    this.kWallTexture = "assets/wall.png";
    this.kTargetTexture = "assets/target.png";
    this.kParticleTexture = "assets/particle.png";
    
    // The camera to view the scene
    this.mCamera = null;

    this.mMsg = null;
    this.mShapeMsg = null;

    this.mAllObjs = null;
    this.mAllParticles = null;
    this.mBounds = null;
    this.mCollisionInfos = [];
    this.mHero = null;
    
    this.mCurrentObj = 0;
    this.mTarget = null;
    */
    this.bgForestTexture = "assets/forest3.png";
    this.bgBagTexture = "assets/bagdemo.png";
    this.kKnight = "assets/Knight.png";

    this.bgTown = "";
    this.bgPalace = "";
    this.bgForest = null;
    this.bgBag = null;
    this.bgMsg = null;
    this.mHero = null;
    this.mHealth = null;
    this.mHealthValue = 100;
    this.mHunger = null;
    this.mHungerValue = 100;
    this.mAttack = null;
    this.mAttackValue = 10;
    this.mDefense = null;
    this.mDefenseValue = 10;

    this.mCamera = null;
    this.attributeCamera = null;
    this.bagCamera = null;
    this.mEventSet = null;
    
    // flags
    this.isBagOpened = false;
    this.isMesOn = false;
    this.flag2 = false;
    this.mEventIndex = 0;
}
gEngine.Core.inheritPrototype(MyGame, Scene);


MyGame.prototype.loadScene = function () {
    /*
    gEngine.Textures.loadTexture(this.kMinionSprite);
    gEngine.Textures.loadTexture(this.kPlatformTexture);
    gEngine.Textures.loadTexture(this.kWallTexture);
    gEngine.Textures.loadTexture(this.kTargetTexture);
    gEngine.Textures.loadTexture(this.kParticleTexture);
    */
    gEngine.Textures.loadTexture(this.bgForestTexture);
    gEngine.Textures.loadTexture(this.kKnight);
    gEngine.Textures.loadTexture(this.bgBagTexture);
};

MyGame.prototype.unloadScene = function () {
    /*
    gEngine.Textures.unloadTexture(this.kMinionSprite);
    gEngine.Textures.unloadTexture(this.kPlatformTexture);
    gEngine.Textures.unloadTexture(this.kWallTexture);
    gEngine.Textures.unloadTexture(this.kTargetTexture);
    gEngine.Textures.unloadTexture(this.kParticleTexture);
    */
    gEngine.Textures.unloadTexture(this.bgForestTexture);
    gEngine.Textures.unloadTexture(this.kKnight);
    gEngine.Textures.unloadTexture(this.bgBagTexture);

};

MyGame.prototype.initialize = function () {
    // setup the main camera
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 800, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1.0]);

    // setup attribute camera on the top-left corner
    this.attributeCamera = new Camera(
        vec2.fromValues(50,140),
        100,
        [50,430,160,120]
    );
    this.attributeCamera.setBackgroundColor([0.9,0.9,0.9,1]);

    //setup bag camera
    this.bagCamera = new Camera(
        vec2.fromValues(50,240),
        100,
        [1000,1000,300,225]
    );
    this.attributeCamera.setBackgroundColor([0.9,0.9,0.9,1]);

            // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);

    /*
    this.mHero = new Hero(this.kMinionSprite);
    this.mAllObjs = new GameObjectSet();
    this.mAllParticles = new ParticleGameObjectSet();

    this.createBounds();
    this.mFirstObject = this.mAllObjs.size();
    this.mCurrentObj = this.mFirstObject;
    
    this.mAllObjs.addToSet(this.mHero);
    var y = 70;
    var x = 10;
    for (var i = 1; i<=5; i++) {
        var m = new Minion(this.kMinionSprite, x, y, ((i%2)!==0));
        x += 20;
        this.mAllObjs.addToSet(m);
    }

    this.mMsg = new FontRenderable("Status Message");
    this.mMsg.setColor([0, 0, 0, 1]);
    this.mMsg.getXform().setPosition(5, 7);
    this.mMsg.setTextHeight(3);
    
    this.mShapeMsg = new FontRenderable("Shape");
    this.mShapeMsg.setColor([0, 0, 0, 1]);
    this.mShapeMsg.getXform().setPosition(5, 73);
    this.mShapeMsg.setTextHeight(2.5);
    */
    this.bgForest = new TextureRenderable(this.bgForestTexture);
    this.bgForest.setColor([0,0,0,0]);
    this.bgForest.getXform().setSize(400,75);
    this.bgForest.getXform().setPosition(200,40);

    this.bgBag = new TextureRenderable(this.bgBagTexture);
    this.bgBag.setColor([0,0,0,0]);
    this.bgBag.getXform().setSize(100,75);
    this.bgBag.getXform().setPosition(50,240);

    // health
    this.mHealth = new FontRenderable("Health: \n\n"+this.mHealthValue+"/100");
    this.mHealth.setColor([0,0,0,1]);
    this.mHealth.getXform().setPosition(10,163.5);
    this.mHealth.setTextHeight(9);

    // hunger
    this.mHunger = new FontRenderable("Hunger: " + this.mHungerValue + "/100");
    this.mHunger.setColor([0, 0, 0, 1]);
    this.mHunger.getXform().setPosition(10, 150.5);
    this.mHunger.setTextHeight(9);

    // attack
    this.mAttack = new FontRenderable("Attack: " + this.mAttackValue);
    this.mAttack.setColor([0, 0, 0, 1]);
    this.mAttack.getXform().setPosition(10, 137.5);
    this.mAttack.setTextHeight(9);

    // defense
    this.mDefense = new FontRenderable("Defense: " + this.mDefenseValue);
    this.mDefense.setColor([0, 0, 0, 1]);
    this.mDefense.getXform().setPosition(10, 124.5);
    this.mDefense.setTextHeight(9);
    this.mEventSet = new EventSet(3);
    
    // knight
    this.mKnight = new SpriteAnimateRenderable(this.kKnight);
    this.mKnight.setColor([1, 1, 1, 0]);
    this.mKnight.getXform().setPosition(50, 25);
    this.mKnight.getXform().setSize(30, 30);
    this.mKnight.setSpriteSequence(512, 0,      // first element pixel position: top-left 164 from 512 is top of image, 0 is left of image
                                    150, 120,       // widthxheight in pixels
                                    3,              // number of elements in this sequence
                                    0);             // horizontal padding in between
    this.mKnight.setAnimationType(SpriteAnimateRenderable.eAnimationType.eAnimateRight);
    this.mKnight.setAnimationSpeed(30);

    // message background
    this.bgMsg = new Renderable();
    this.bgMsg.getXform().setPosition(1000,1000);
    this.bgMsg.getXform().setSize(80,20);
    this.bgMsg.setColor([0,0,0,0.2]);
};

// This is the draw function, make sure to setup proper drawing environment, and more
// importantly, make sure to _NOT_ change any state.
MyGame.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]); // clear to light gray

    this.mCamera.setupViewProjection();

    /*
    this.mAllObjs.draw(this.mCamera);
    
    // for now draw these ...
    //for (var i = 0; i<this.mCollisionInfos.length; i++)
    //    this.mCollisionInfos[i].draw(this.mCamera);
    this.mCollisionInfos = []; 
    
    this.mTarget.draw(this.mCamera);
    this.mMsg.draw(this.mCamera);   // only draw status in the main camera
    this.mShapeMsg.draw(this.mCamera);
    this.mAllParticles.draw(this.mCamera);
    */
    this.bgForest.draw(this.mCamera);
    for(var i=0;i<3;i++){
        this.mEventSet[i].icon.draw(this.mCamera);
    }
    this.mKnight.draw(this.mCamera);
    this.bgMsg.draw(this.mCamera);
    if(this.isMesOn==true)
        this.bgBag.draw(this.mCamera);
    

    this.attributeCamera.setupViewProjection();
    this.mHealth.draw(this.attributeCamera);
    this.mHunger.draw(this.attributeCamera);
    this.mAttack.draw(this.attributeCamera);
    this.mDefense.draw(this.attributeCamera);

    this.bagCamera.setupViewProjection();

    
};

/*
MyGame.prototype.increasShapeSize = function(obj, delta) {
    var s = obj.getRigidBody();
    var r = s.incShapeSizeBy(delta);
};
*/

// The Update function, updates the application state. Make sure to _NOT_ draw
// anything from this function!
MyGame.kBoundDelta = 0.1;
MyGame.prototype.update = function () {
    /*
    var msg = "";   
    
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.C)) {
        if (this.mCamera.isMouseInViewport()) {
            var p = this.createParticle(this.mCamera.mouseWCX(), this.mCamera.mouseWCY());
            this.mAllParticles.addToSet(p);
        }
    }
    gEngine.ParticleSystem.update(this.mAllParticles);
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.P)) {
        gEngine.Physics.togglePositionalCorrection();
    }
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.V)) {
        gEngine.Physics.toggleHasMotion();
    }
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.H)) {
        this.radomizeVelocity();
    }
    
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Left)) {
        this.mCurrentObj -= 1;
        if (this.mCurrentObj < this.mFirstObject)
            this.mCurrentObj = this.mAllObjs.size() - 1;
    }            
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.Right)) {
        this.mCurrentObj += 1;
        if (this.mCurrentObj >= this.mAllObjs.size())
            this.mCurrentObj = this.mFirstObject;
    }

    var obj = this.mAllObjs.getObjectAt(this.mCurrentObj);
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Y)) {
        this.increasShapeSize(obj, MyGame.kBoundDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.U)) {
        this.increasShapeSize(obj, -MyGame.kBoundDelta);
    }
    
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.G)) {
        var x = 20 + Math.random() * 60;
        var y = 75;
        var t = Math.random() > 0.5;
        var m = new Minion(this.kMinionSprite, x, y, t);
        this.mAllObjs.addToSet(m);
    }
        
    obj.keyControl();
    obj.getRigidBody().userSetsState();
    
    this.mAllObjs.update(this.mCamera);
    
    gEngine.Physics.processCollision(this.mAllObjs, this.mCollisionInfos);
    gEngine.ParticleSystem.collideWithRigidSet(this.mAllObjs, this.mAllParticles);

    var p = obj.getXform().getPosition();
    this.mTarget.getXform().setPosition(p[0], p[1]);
    msg += "  P(" + gEngine.Physics.getPositionalCorrection() + 
           " " + gEngine.Physics.getRelaxationCount() + ")" +
           " V(" + gEngine.Physics.getHasMotion() + ")";
    this.mMsg.setText(msg);
    
    this.mShapeMsg.setText(obj.getRigidBody().getCurrentState());
    */

    var deltaX=0.5;
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.D)) {
        if(this.isBagOpened==false && this.isMesOn==false){
            var center = this.mCamera.getWCCenter();
            center[0]+=deltaX;
            this.mCamera.setWCCenter(center[0],center[1]);
            var x=this.mKnight.getXform().mPosition;
            //console.log(x);
            this.mKnight.getXform().setPosition(x[0]+deltaX,x[1]);
            this.mKnight.draw(this.mCamera);
        }

    }

    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Space)){
        this.isMesOn=false;
        this.bgMsg.getXform().setPosition(1000,1000);
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
        if(this.isBagOpened==false){
            this.bagCamera.setViewport([450,200,300,300],0);
            this.isBagOpened=true;
        }
        else{
            this.bagCamera.setViewport([1000,1000,300,300],0);
            this.isBagOpened=false;
        }
    }
    if(this.mEventIndex<3&&this.mKnight.getXform().mPosition[0]>this.mEventSet[this.mEventIndex].icon.getXform().mPosition[0]){
        // console.log(this.mEventSet[this.mEventIndex].information);
        this.SendMessage("here");
        this.mEventIndex++;
    }
};

//遇到事件后弹窗消息，只能按空格继续
MyGame.prototype.SendMessage = function(content){
    var cameraCenter = this.mCamera.getWCCenter();
    this.bgMsg.getXform().setPosition(cameraCenter[0],cameraCenter[1]-25);
    this.isMesOn=true;
}

/*
MyGame.prototype.createParticle = function(atX, atY) {
    var life = 30 + Math.random() * 200;
    var p = new ParticleGameObject("assets/particle.png", atX, atY, life);
    p.getRenderable().setColor([1, 0, 0, 1]);
    
    // size of the particle
    var r = 3.5 + Math.random() * 2.5;
    p.getXform().setSize(r, r);
    
    // final color
    var fr = 3.5 + Math.random();
    var fg = 0.4 + 0.1 * Math.random();
    var fb = 0.3 + 0.1 * Math.random();
    p.setFinalColor([fr, fg, fb, 0.6]);
    
    // velocity on the particle
    var fx = 10 * Math.random() - 20 * Math.random();
    var fy = 10 * Math.random();
    p.getParticle().setVelocity([fx, fy]);
    
    // size delta
    p.setSizeDelta(0.98);
    
    return p;
};
*/