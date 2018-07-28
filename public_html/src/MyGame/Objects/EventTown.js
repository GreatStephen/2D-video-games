/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function EventTown(num) {
    var AllEventTypeTown = [0,1,1,0,0,0,1,0,0,0];
    var AllEventSize_xTown = [150, 180, 350, 250, 140, 340, 200,200,200,200];//todo
    var AllEventSize_yTown = [150, 180, 700, 250, 90, 350,200,350,350,200];//todo
    var AllEventSpriteSequenceTown = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
        {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
        {"topPixel":256, "leftPixel":55, "elmWidthInPixel":152, "elmHeightInPixel":256, "numElements":13, "wPaddingInPixel":0},
        {},{},{},
        {"topPixel":64, "leftPixel":0, "elmWidthInPixel":64, "elmHeightInPixel":64, "numElements":8, "wPaddingInPixel":0},
        {}

    ];
    var AllEventSpeedTown = [0,15,7,0,0,0,15,0,0,0];

    var AllEventMove_xTown = [0,0,0,0,0,0,0,0,0,0];
    var AllEventMove_yTown = [-20,-25,-10,20,-100,50,-15,10,-15,-15];

    var AllEventIconTown = ["assets/mushroom.png",
        "assets/eagle.png",
        "assets/Knight_New.png",
        "assets/appletree.png",
        "assets/pond.png",
        "assets/ruins.png",
        "assets/hunter.png",
        "assets/villager.png",
        "assets/villager.png",
        "assets/businessman.png"
    ];
    var AllEventInfTown = ["This is a monster mushroom!",
        "This is an evil eagle!",
        "This is a guard in the forest!",
        "I see an apple tree.",
        "This is a serene pond.",
        "This is an ancient ruins.",
        "Assassin: I was ordered to kill you today",
        "Villager: I think you are the prince!",
        "Villager: Life is getting harder",
        "Do you have anything to trade?"
    ];

    var AllEnemyIdTown=[
        // mushroom
        0,

        // eagle
        1,

        // knignt
        2,
    ];

// possible results
    var AllResultTown=[
        // mushroom 0 1
        new Result("Fight result: ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        new Result("Escape successfully. ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7),

        // eagle 2 3
        new Result("Fight result: ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        new Result("Escape successfully. ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7),

        // knignt 4 5
        new Result("Fight result: ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        new Result("Escape successfully. ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7),

        // appletree 6 7 8 9 10
        new Result("Get apple *1",0,0,0,0,0,0,0,0,1,0,0,0.8),
        new Result("Get nothing",0,0,0,0,0,0,0,-1,-1,0,0,0.2),
        new Result("Get herb *1",0,0,0,0,0,0,0,3,1,0,0,0.2),
        new Result("Get timber *1",0,0,0,0,0,0,0,4,1,0,0,0.8),
        new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),

        // pond 11 12 13 14
        new Result("Hunger +10",0,0,+10,0,0,0,0,-1,-1,0,0,1),
        new Result("Get fish *1", 0,0,0,0,0,0,0,2,1,0,0,0.8),
        new Result("Get a key...", 0,0,0,0,0,0,0,12,1,0,0,0.2),
        new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),

        // treasure  case 15 16 17
        new Result("Money(Apple) *1",0,0,0,0,0,0,0,0,1,0,0,0.4),
        new Result("Money(Apple) *2", 0,0,0,0,0,0,0,0,2,0,0,0.6),
        new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),

        // ruins 18 19 20 21
        new Result("Money *10", 0,0,0,0,0,0,10,0,0,0,0,0.3),
        new Result("Get timber *2", 0,0,0,0,0,0,0,4,2,0,0,0.3),
        new Result("Get herb *2", 0,0,0,0,0,0,0,3,2,0,0,0.4),
        new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),

        // hunter 22 23 24 25
        new Result("receive the hunter's cape", 0,0,0,0,0,0,0,11,1,0,0,1),
        new Result("Defeated, you lose 30HP", -30,0,0,0,0,0,0,0,0,0,0,0.5),
        new Result("Knock him down, get meat *2", 0,0,0,0,0,0,0,1,2,0,0,0.5),
        new Result("You leave.", 0,0,0,0,0,0,0,0,0,0,0,1),


        // villager 26 27 28 29 30
        new Result("The princess moved to a secret castle.", 0,0,0,0,0,0,0,0,0,0,0,1),
        new Result("Get herb *1", 0,0,0,0,0,0,0,0,3,0,0,0.6),
        new Result("The villager doesn't give you anything.", 0,0,0,0,0,0,0,0,0,0,0,0.4),
        new Result("You kill him, lose 10HP.", -10,0,0,0,0,0,0,0,0,0,0,1),

        new Result("The princess seemed to be chasing the crown!",0,0,0,0,0,0,0,0,0,0,0,1),

        // businessman 31 32 33 34
        new Result("Lose money*80, get a new axe.", 0,0,0,0,0,0,-80,5,1,0,0,1),
        new Result("Lose timber*2, get a herb.",0,0,0,0,0,0,0,3,1,4,2,1),
        new Result("You leave.",0,0,0,0,0,0,0,0,0,0,0,1),
        new Result("",0,0,0,0,0,0,0,0,0,0,0,1),

        // pass last knight 35
        new Result("The town guard thinks you are a hunter, let you in.",0,0,0,0,0,0,0,0,0,0,0,1),

        // escape fail 36
        new Result("Fail to escape. ",0,0,0,0,0,0,0,0,0,0,0,0.3)

    ];
    AllResultTown[0].escape = false;
    AllResultTown[2].escape = false;
    AllResultTown[4].escape = false;
    AllResultTown[36].escape = false;

// 4 actions
    var AllEventActTown = [
        // mushroom
        new Action("1. Fight",[AllResultTown[0]]),
        new Action("2. Escape (70% succeed)", [AllResultTown[1], AllResultTown[36]]),
        new Action(),
        new Action(),
        // eagle
        new Action("1. Fight",[AllResultTown[2]]),
        new Action("2. Escape (70% succeed)", [AllResultTown[3], AllResultTown[36]]),
        new Action(),
        new Action(),
        // knight
        new Action("1. Fight",[AllResultTown[4]]),
        new Action("2. Escape (70% succeed)", [AllResultTown[5], AllResultTown[36]]),
        new Action(),
        new Action(),
        // appletree
        new Action("1. Shake it",[AllResultTown[6], AllResultTown[7]]),
        new Action("2. Cut it down", [AllResultTown[8], AllResultTown[9]]),
        new Action("3. Go away", [AllResultTown[10]]),
        new Action(),

        // pond
        new Action("1. Drink water", [AllResultTown[11]]),
        new Action("2. Catch something", [AllResultTown[12], AllResultTown[13]]),
        new Action("3. Go away", [AllResultTown[14]]),
        new Action(),

        // ruins
        new Action("1. Search it", [AllResultTown[18], AllResultTown[19], AllResultTown[20]]),
        new Action("2. Go away", [AllResultTown[21]]),
        new Action(),
        new Action(),

        // hunter
        new Action("1. Fight with him!", [AllResultTown[22]]),
        new Action(),
        new Action(),
        new Action(),


        // villager1
        new Action("1. Talk to him.", [AllResultTown[26]]),
        new Action("2. Kill him, or he will call the guards!", [AllResultTown[29]]),
        new Action("3. Beg for something.(60% succeed)",[AllResultTown[27], AllResultTown[28]]),
        new Action(),

        // villager2
        new Action("1. Talk to him.", [AllResultTown[30]]),
        new Action("2. Kill him, or he will call the guards!", [AllResultTown[29]]),
        new Action("3. Beg for something.(60% succeed)",[AllResultTown[27], AllResultTown[28]]),
        new Action(),


        // businessman
        new Action("1. 80 gold for an axe", [AllResultTown[31]]),
        new Action("2. timber*2 for an herb", [AllResultTown[32]]),
        new Action("3. leave",[AllResultTown[33]]),
        new Action()

    ];

    var t = Math.floor(Math.random()*9);
    while((t>=6 && t<=9)){
        t = Math.floor(Math.random()*6);
    }

    if(num==3){
        // beggar, the key
        t=7;
    }
    else if(num==5){
        // businessman
        t=9;
    }

    else if(num==6){
        //NO.5 is assassin;
        t = 6;
    }
    else if(num==9){
        // NO.7 is villager1
        t = 7;
    }
    else if(num==12){
        //NO.10 is villager2
        t = 8;
    }


    //if(num==1)  t=0;
    // type = 1 -> animation
    console.log("t="+t);
    this.type = AllEventTypeTown[t];
    this.position = [1000*num+AllEventMove_xTown[t], 200+AllEventMove_yTown[t]];
    this.picture = AllEventIconTown[t];

    console.log(this.picture);
    this.size_x = AllEventSize_xTown[t];
    this.size_y = AllEventSize_yTown[t];
    this.sequence = AllEventSpriteSequenceTown[t];
    this.speed = AllEventSpeedTown[t];

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



    this.information = AllEventInfTown[t];
    this.action = [];
    this.action.push(AllEventActTown[4*t]);
    console.log(AllEventActTown[4*t].content);
    this.action.push(AllEventActTown[4*t+1]);
    this.action.push(AllEventActTown[4*t+2]);
    this.action.push(AllEventActTown[4*t+3]);
    this.isBattle = false;
    if(AllEnemyIdTown[t]>-1)
        this.enemy = new Enemy(AllEnemyIdTown[t]);
    else
        this.enemy = null;

}
gEngine.Core.inheritPrototype(EventTown, GameObject);



