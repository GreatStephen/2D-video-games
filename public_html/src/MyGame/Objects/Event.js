/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!
var AllEventIcon = ["assets/mushroom.png", 
    "assets/eagle.png", 
    "assets/knight.png",
    "assets/appletree.png",
    "assets/pond.png",
    "assets/ruins.png"
];
var AllEventInf = ["This is a monster mushroom!", 
    "This is an evil eagle!", 
    "This is a guard in the forest!",
    "I see an apple tree.",
    "This is a serene pond.",
    "This is an ancient ruins."
];

var AllEnemy=[
    
];

// possible results
var AllResult=[
    // mushroom
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 1),

    // eagle
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 1),

    // knignt
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 1),

    // appletree
    new Result("Get apple *1",0,0,0,0,0,0,0,1,0.8),
    new Result("Get nothing",0,0,0,0,0,0,-1,-1,0.2),
    new Result("Get herb *1",0,0,0,0,0,0,3,1,0.6),
    new Result("Get timber *5",0,0,0,0,0,0,4,5,0.4)

    // pond
    new Result("Hunger +10",0,0,+10,0,0,0,-1,-1,1),
    new Result("Get fish *1", 0,0,0,0,0,0,2,1,0.8),
    new Result("Get nothing", 0,0,0,0,0,0,-1,-1,0.2),

    // treasure  case
    new Result("Money(Apple) *10",0,0,0,0,0,0,0,10,0.4),
    new Result("Money(Apple) *8", 0,0,0,0,0,0,0,10,0.6),

    // ruins
    new Result("Money(Apple) *5", 0,0,0,0,0,0,0,5,0.3),
    new Result("Get timber *5", 0,0,0,0,0,0,4,5,0.3),
    new Result("Get herb *2", 0,0,0,0,0,0,3,2,0.4)

];

// 4 actions
var Action = [
    // mushroom

    // eagle

    // knight

    // appletree
    new Action("1. Shake it",[]),
    new Action("2. Cut it down", []),
    new Action("3. Go away", []),

    // pond
    new Action("1. Drink water", []),
    new Action("2. Catch fish", []),
    new Action("3. Go away", []),

    // treasure case
    new Action("1. Open it", []),
    new Action("2. Go away", []),

    // ruins
    new Action("1. Search it", []),
    new Action("2. Go away", []),

];

var AllEventAct = [{"Action1":"a11", "Action2":"a12"}, {"Action1":"a21", "Action2":"a22"}, {"Action1":"a31", "Action2":"a32"}];
var AllEventType = [0,1,1];
var AllEventSize_x = [20, 27, 35, 35, 35, 35];
var AllEventSize_y = [20, 27, 70, 35, 35, 35];
var AllEventSpriteSequence = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":75, "elmHeightInPixel":128, "numElements":13, "wPaddingInPixel":0}
                             ];
var AllEventSpeed = [0,15,7];

var AllEventMove_x = [0,0,0];
var AllEventMove_y = [3,0,-8];
function Event(num) {
    var t = Math.floor(Math.random()*6);
    //t=2;
    
    // type = 1 -> animation
    this.type = AllEventType[t];
    this.position = [100*num+AllEventMove_x[t], 20+AllEventMove_y[t]];
    this.picture = AllEventIcon[t];
    console.log(this.picture);
    this.size_x = AllEventSize_x[t];
    this.size_y = AllEventSize_y[t];
    this.sequence = AllEventSpriteSequence[t];
    this.speed = AllEventSpeed[t];

    this.icon = null;
    if(this.type==1){
        // animation texture
        this.icon = new SpriteAnimateRenderable(this.picture);
        this.icon.setColor([1, 1, 1, 0]);
        this.icon.getXform().setPosition(this.position[0], this.position[1]);
        this.icon.getXform().setSize(this.size_x, this.size_y);
        this.icon.setSpriteSequence(this.sequence.topPixel, this.sequence.leftPixel, this.sequence.elmWidthInPixel, this.sequence.elmHeightInPixel, this.sequence.numElements, this.sequence.wPaddingInPixel);
        this.icon.setAnimationSpeed(this.speed);
    }
    else{
        // static texture
        this.icon = new TextureRenderable(this.picture);
        this.icon.setColor([0,0,0,0]);
        this.icon.getXform().setSize(this.size_x,this.size_y);
        this.icon.getXform().setPosition(this.position[0],this.position[1]);
    }

    this.information = AllEventInf[t];
    this.action = AllEventAct[t];
    this.isBattle = false;
    this.enemy = null;
    
}
gEngine.Core.inheritPrototype(Event, GameObject);




