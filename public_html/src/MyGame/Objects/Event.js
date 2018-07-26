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
    "assets/villager.png",
    "assets/wizard.png",
    "assets/businessman.png"
];
var AllEventInf = ["This is a monster mushroom!", 
    "This is an evil eagle!", 
    "This is a guard in the forest!",
    "I see an apple tree.",
    "This is a serene pond.",
    "This is an ancient ruins.",
    "Hunter:Would you like to give me a hand?",
    "Villager: Hey, young man!",
    "Wizard: Poor prince! I can give you something.",
    "Do you have anything to trade?"
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
    // mushroom 0 1
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // eagle 2 3
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // knignt 4 5
    new Result("fight", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    new Result("escape", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // appletree 6 7 8 9 10
    new Result("Get apple *1",0,0,0,0,0,0,0,1,0.8),
    new Result("Get nothing",0,0,0,0,0,0,-1,-1,0.2),
    new Result("Get herb *1",0,0,0,0,0,0,3,1,0.6),
    new Result("Get timber *1",0,0,0,0,0,0,4,1,0.4),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // pond 11 12 13 14
    new Result("Hunger +10",0,0,+10,0,0,0,-1,-1,1),
    new Result("Get fish *1", 0,0,0,0,0,0,2,1,0.8),
    new Result("Get nothing", 0,0,0,0,0,0,-1,-1,0.2),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // treasure  case 15 16 17
    new Result("Money(Apple) *1",0,0,0,0,0,0,0,1,0.4),
    new Result("Money(Apple) *2", 0,0,0,0,0,0,0,2,0.6),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),

    // ruins 18 19 20 21
    new Result("Money(Apple) *1", 0,0,0,0,0,0,0,1,0.3),
    new Result("Get timber *1", 0,0,0,0,0,0,4,1,0.3),
    new Result("Get herb *2", 0,0,0,0,0,0,3,2,0.4),
    new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 1),
    
    // hunter 22 23 24 25
    new Result("Apple *2", 0,0,0,0,0,0,0,2,1),
    new Result("you lose 30HP", -30,0,0,0,0,0,4,5,0.5),
    new Result("Meat *2", 0,0,0,0,0,0,1,2,0.5),
    new Result("You leave.", 0,0,0,0,0,0,0,0,1),

    
    // villager 26 27 28 29
    new Result("The king fall seriously ill.", 0,0,0,0,0,0,0,0,1),
    new Result("Get apple *1", 0,0,0,0,0,0,0,1,0.6),
    new Result("The villager didn't give you anything.", 0,0,0,0,0,0,0,0,0.4),
    new Result("You leave.", 0,0,0,0,0,0,0,0,1),

    // wizard 30 31 32
    new Result("The wizard gives you a secret bag.",0,0,0,0,0,0,0,0,1),
    new Result("The wizard gives you a treasure case.",0,0,0,0,0,0,0,0,1),
    new Result("Max HP-30, get a new weapon.",0,0,0,0,0,0,0,0,1),

    // businessman 33 34 35
    new Result("lose timber*3, get a new spear.", 0,0,0,0,0,0,6,1,1),
    new Result("lose timber*3, get a new shield.",0,0,0,0,0,0,9,1,1),
    new Result("lose timber*2, get an apple.",0,0,0,0,0,0,0,1,1)


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

    // ruins
    new Action("1. Search it", [AllResult[18], AllResult[19], AllResult[20]]),
    new Action("2. Go away", [AllResult[21]]),
    new Action(),
    new Action(),
    
    // hunter
    new Action("1. Ok", [AllResult[22]]),
    new Action("2. Grab him.", [AllResult[23], AllResult[24]]),
    new Action("3. Sorry, I’m busy.",[AllResult[25]]),
    new Action(),
    

    // villager1
    new Action("1. Ask about the king.", [AllResult[26]]),
    new Action("2. I'm the prince, I need your help.", [AllResult[27], AllResult[28]]),
    new Action("3. Thanks, but I have to go.",[AllResult[29]]),
    new Action(),

    // wizard
    new Action("1. I want your precious advice.", [AllResult[30]]),
    new Action("2. I want a valuable gift.", [AllResult[31]]),
    new Action("3. I want to exchange my health for a weapon.",[AllResult[32]]),
    new Action(),

    // businessman
    new Action("1. timber*3 for a spear.", [AllResult[33]]),
    new Action("2. timber*3 for a shield.", [AllResult[34]]),
    new Action("3. timber*2 for an apple.",[AllResult[35]]),
    new Action()

];

var AllEventType = [0,1,1,0,0,0,1,0];
var AllEventSize_x = [150, 180, 200, 250, 140, 340, 200,200,200];//todo
var AllEventSize_y = [150, 180, 600, 250, 90, 350,200,200,200];//todo
var AllEventSpriteSequence = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
                              {"topPixel":128, "leftPixel":0, "elmWidthInPixel":75, "elmHeightInPixel":128, "numElements":13, "wPaddingInPixel":0},
                              {},{},{},
                              {"topPixel":64, "leftPixel":0, "elmWidthInPixel":64, "elmHeightInPixel":64, "numElements":8, "wPaddingInPixel":0},
                              {}
                              
                             ];//todo
var AllEventSpeed = [0,15,7,0,0,0,15,0,0,0];//todo

var AllEventMove_x = [0,0,0,0,0,0,0,0,0,0];//todo
var AllEventMove_y = [-20,-25,-120,20,-100,50,-15,-15,-15,-15];//todo
function Event(num) {
    var t = Math.floor(Math.random()*10);

    if(num>=1 && num<=3){
        // 3 fights
        while(t>=2){
            t= Math.floor(Math.random()*2);
        }
    }
    else if(num==5){
        //NO.5 is villager;
        t = 8;
    }
    else if(num==7){
        // NO.7 is businessman
        t = 10;
    }
    else if(num==13){
        // NO.13 is wizard
        t=9;
    }
    else if(num==15){
        // NO.15 is villager
        t=8;

    }
    else if(num==16){
        t=2;
    }


    //if(num==1)  t=0;
    // type = 1 -> animation
    this.type = AllEventType[t];
    this.position = [1000*num+AllEventMove_x[t], 200+AllEventMove_y[t]];
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




