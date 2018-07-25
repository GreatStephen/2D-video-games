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
    "assets/ruins.png",
    "assets/hunter.png",
    //"assets/witch.png",
    "assets/villager.png",
    //"assets/villager.png",
];
var AllEventInf = ["This is a monster mushroom!", 
    "This is an evil eagle!", 
    "This is a guard in the forest!",
    "I see an apple tree.",
    "This is a serene pond.",
    "This is an ancient ruins.",
    //"Witch: Would you like to buy some potions ? They can make you feel better.",
    "Hunter:Would you like to give me a hand?",
    "Villager: Hey, young man",
    //"Villager: I am starving. Can you give some food?  "
];

var AllEnemy1=[
     // mushroom
    new Enemy(0),

    // eagle
    new Enemy(1),

    // knignt
    new Enemy(2),
];

// possible results
var AllResult=[
    // mushroom
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // eagle
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // knignt
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // appletree
    new Result("Get apple *1",0,0,0,0,0,0,0,1,0.8),
    new Result("Get nothing",0,0,0,0,0,0,-1,-1,0.2),
    new Result("Get herb *1",0,0,0,0,0,0,3,1,0.6),
    new Result("Get timber *1",0,0,0,0,0,0,4,1,0.4),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // pond
    new Result("Hunger +10",0,0,+10,0,0,0,-1,-1,1),
    new Result("Get fish *1", 0,0,0,0,0,0,2,1,0.8),
    new Result("Get nothing", 0,0,0,0,0,0,-1,-1,0.2),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // treasure  case
    new Result("Money(Apple) *1",0,0,0,0,0,0,0,1,0.4),
    new Result("Money(Apple) *2", 0,0,0,0,0,0,0,2,0.6),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // ruins
    new Result("Money(Apple) *1", 0,0,0,0,0,0,0,1,0.3),
    new Result("Get timber *1", 0,0,0,0,0,0,4,1,0.3),
    new Result("Get herb *2", 0,0,0,0,0,0,3,2,0.4),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    
    // hunter
    new Result("Apple *2", 0,0,0,0,0,0,0,2,1),
    new Result("you lose 30HP", -30,0,0,0,0,0,4,5,0.5),
    new Result("Meat *2", 0,0,0,0,0,0,1,2,0.5),
    new Result("You leave.", 0,0,0,0,0,0,0,0,1),

    
    // villager
    new Result("The king fall serious ill", 0,0,0,0,0,0,0,0,1),
    new Result("Get apple *1", 0,0,0,0,0,0,0,1,0.6),
    new Result("You are a liar.", 0,0,0,0,0,0,0,0,0.4),
    new Result("You leave.", 0,0,0,0,0,0,0,0,1)

];
AllResult[0].escape = false;
AllResult[2].escape = false;
AllResult[4].escape = false;

// 4 actions
var AllEventAct = [
    // mushroom
    new Action("1. Fight",[AllResult[0]]),
    new Action("2. go away", [AllResult[1]]),
    new Action(),
    new Action(),
    // eagle
    new Action("1. Fight",[AllResult[2]]),
    new Action("2. go away", [AllResult[3]]),
    new Action(),
    new Action(),
    // knight
    new Action("1. Fight",[AllResult[4]]),
    new Action("2. go away", [AllResult[5]]),
    new Action(),
    new Action(),
    // appletree
    new Action("1. Shake it",[AllResult[6], AllResult[7]]),
    new Action("2. Cut it down", [AllResult[8], AllResult[9]]),
    new Action("3. Go away", [AllResult[10]]),
    new Action(),

    // pond
    new Action("1. Drink water", [AllResult[11]]),
    new Action("2. Catch fish", [AllResult[12], AllResult[13]]),
    new Action("3. Go away", [AllResult[14]]),
    new Action(),

    // treasure case
//    new Action("1. Open it", [AllResult[15], AllResult[16]]),
//    new Action("2. Go away", [AllResult[17]]),
//    new Action(),
//    new Action(),

    // ruins
    new Action("1. Search it", [AllResult[18], AllResult[19], AllResult[20]]),
    new Action("2. Go away", [AllResult[21]]),
    new Action(),
    new Action(),
    
    // hunter
    new Action("1. Ok", [AllResult[22]]),
    new Action("2. Grab him.", [AllResult[23]], AllResult[24]),
    new Action("3. Sorry, I’m busy.",[AllResult[25]]),
    new Action(),
    
    // witch
//    new Action("1. Small Healing Potion *1 (HP +20 10G)", [AllResult[18], AllResult[19], AllResult[20]]),
//    new Action("2. Medium Healing Potion *1 (HP +20 10G)", [AllResult[21]]),
//    new Action(),
//    new Action(),
    
    // villager1
    new Action("1. Ask about the king.", [AllResult[26]]),
    new Action("2. I'm the prince, I need your help.", [AllResult[27], AllResult[28]]),
    new Action("3. Thanks, but I have to go.",[AllResult[29]]),
    new Action(),
    

];

var AllEventType = [0,1,1,0,0,0,1,0];
var AllEventSize_x = [20, 27, 35, 35, 13, 40, 27,27];//todo
var AllEventSize_y = [20, 27, 70, 35, 13, 50,27,27];//todo
var AllEventSpriteSequence = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":75, "elmHeightInPixel":128, "numElements":13, "wPaddingInPixel":0},
                              {},{},{},
                              {"topPixel":64, "leftPixel":0, "elmWidthInPixel":64, "elmHeightInPixel":64, "numElements":8, "wPaddingInPixel":0},
                              {}
                              
                             ];//todo
var AllEventSpeed = [0,15,7,0,0,0,15,0];//todo

var AllEventMove_x = [0,0,0,0,0,0,0,0];//todo
var AllEventMove_y = [3,0,-8,12,-5,22,5,5];//todo
function Event(num) {
    var t = Math.floor(Math.random()*8);
    //var t=0;
    //t = 7;
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
    this.action = [];
    this.action.push(AllEventAct[4*t]);
    this.action.push(AllEventAct[4*t+1]);
    this.action.push(AllEventAct[4*t+2]);
    this.action.push(AllEventAct[4*t+3]);
    this.isBattle = false;
    this.enemy = AllEnemy1[t];
    
}
gEngine.Core.inheritPrototype(Event, GameObject);




