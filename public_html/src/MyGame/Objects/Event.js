/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!
var AllEventIcon = ["assets/eagle.png", "assets/eagle.png", "assets/eagle.png"];
var AllEventInf = ["this is event 1", "this is event 2", "this is event 3"];
var AllEventAct = [{"Action1":"a11", "Action2":"a12"}, {"Action1":"a21", "Action2":"a22"}, {"Action1":"a31", "Action2":"a32"}];
var AllEventType = [1,1,1];
var AllEventSize = [27,27,27];
var AllEventSpriteSequence = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0}
                             ];
function Event(num) {
    var t = Math.floor(Math.random()*3);
    t=0;
    
    this.type = AllEventType[t];
    this.position = [100*num, 20];
    this.picture = AllEventIcon[t];
    console.log(this.picture);
    this.size = AllEventSize[t];
    this.sequence = AllEventSpriteSequence[t];
    gEngine.Textures.loadTexture(this.picture);
    this.icon = null;
    if(this.type==1){
        
        this.icon = new SpriteAnimateRenderable(this.picture);
        this.icon.setColor([1, 1, 1, 0]);
        this.icon.getXform().setPosition(this.position[0], this.position[1]);
        this.icon.getXform().setSize(this.size, this.size);
        this.icon.setSpriteSequence(this.sequence.topPixel, this.sequence.leftPixel, this.sequence.elmWidthInPixel, this.sequence.elmHeightInPixel, this.sequence.numElements, this.sequence.wPaddingInPixel);
        this.icon.setAnimationSpeed(15);
    }
    else{
        this.icon = new TextureRenderable();
    }
    //gEngine.Textures.unloadTexture(this.picture);
    this.information = AllEventInf[t];
    this.action = AllEventAct[t];
    this.isBattle = false;
    this.enemy = null;
    
}
gEngine.Core.inheritPrototype(Event, GameObject);




