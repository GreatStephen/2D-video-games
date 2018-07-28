/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function EventPalace(num, type){
    console.log(num);
    var AllEventTypePalace = [0,1,1,0,0,0,1,0,0,0];
    var AllEventSize_xPalace = [150, 180, 350, 250, 140, 340, 200,200,200,200];//todo
    var AllEventSize_yPalace = [150, 180, 700, 250, 90, 350,200,350,350,200];//todo
    var AllEventSpriteSequencePalace = [{"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
        {"topPixel":128, "leftPixel":0, "elmWidthInPixel":80, "elmHeightInPixel":120, "numElements":9, "wPaddingInPixel":0},
        {"topPixel":256, "leftPixel":55, "elmWidthInPixel":152, "elmHeightInPixel":256, "numElements":13, "wPaddingInPixel":0},
        {},{},{},
        {"topPixel":64, "leftPixel":0, "elmWidthInPixel":64, "elmHeightInPixel":64, "numElements":8, "wPaddingInPixel":0},
        {}

    ];
    var AllEventSpeedPalace = [0,15,7,0,0,0,15,0,0,0];

    var AllEventMove_xPalace = [0,0,0,0,0,0,0,0,0,0];
    var AllEventMove_yPalace = [-20,-25,-10,20,-100,50,-15,10,-15,-15];

    var AllEventIconPalace = ["assets/mushroom.png",
        "assets/eagle.png",
        "assets/Knight_New.png",
        "assets/appletree.png",
        "assets/pond.png",
        "assets/businessman.png",
        "assets/hunter.png",
        "assets/villager.png",
        "assets/villager.png",
        "assets/businessman.png"
    ];
    var AllEventInfPalace = ["Would you like to meet with the princess?",
        "You prove that you are the prince by the ring, than you'd like to:",
        "You meet the king",
        "This is a soldier",
        "This is a captain",
        "Merchant: Would you like to buy something",
        "Servant: I ..."
    ];

    var AllEnemyIdPalace=[
        -1,-1,0,0,0,-1,-1
    ];

// possible results
    var AllResultPalace=[
        // common
        new Result("Fight result: ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        new Result("Escape successfully. ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7),
        new Result("Fail to escape. ",0,0,0,0,0,0,0,0, 0, 0,0,0,0,0.3),
        new Result("Get nothing", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
        new Result("ok", 0, 0, 0, 0, 0, 0, 0,0, 0,  0, 0, 0, 0, 1),

        // businessman 567
        new Result("Lose money*80, get a new axe.", 0,0,0,0,0,0,-80,0,0,5,1,0,0,1),
        new Result("Lose timber*2, get a herb.",0,0,0,0,0,0,0,0,0,3,1,4,2,1),
        new Result("You leave.",0,0,0,0,0,0,0,0,0,0,0,0,0,1),

    ];
    AllResultPalace[0].escape = false;
    AllResultPalace[2].escape = false;

// 4 actions
    var AllEventActPalace = [
        // meet princess
        new Action("1. Yes",[AllResultPalace[4]]),
        new Action("2. No", [AllResultPalace[3]]),
        new Action(),
        new Action(),
        // princess
        new Action("1. Ask for her help",[AllResultPalace[3]]),
        new Action("2. Reveal her plot", [AllResultPalace[3]]),
        new Action(),
        new Action(),
        // king
        new Action("1. Fight with him",[AllResultPalace[0]]),
        new Action("2. Force him to give your crown by the country's power of princess", [AllResultPalace[3]]),
        new Action("3. persuade him", [AllResultPalace[3]]),
        new Action(),
        // soldier
        new Action("1. Fight",[AllResultPalace[0]]),
        new Action("2. Escape", [AllResultPalace[1], AllResultPalace[2]]),
        new Action(),
        new Action(),

        // captain
        new Action("1. Fight",[AllResultPalace[0]]),
        new Action("2. Escape", [AllResultPalace[1], AllResultPalace[2]]),
        new Action(),
        new Action(),

        // merchant
        new Action("1. 80 gold for an axe", [AllResultPalace[5]]),
        new Action("2. timber*2 for an herb", [AllResultPalace[6]]),
        new Action("3. leave",[AllResultPalace[7]]),
        new Action(),

        // servant
        new Action("1. do something", [AllResultPalace[3]]),
        new Action("2. do something", [AllResultPalace[3]]),
        new Action(),
        new Action()
    ];
    AllResultPalace[4].flag = 1;
    var t = Math.floor(Math.random()*2)+3;
    if(num==1)
        t=0;
    if(num==7)
        t=6;
    if(num==8)
        t=5;
    if(num==9&&type>0)
        t=1;
    if(num==10)
        t=2;

    this.type = AllEventTypePalace[t];
    this.position = [1000*num+AllEventMove_xPalace[t], 200+AllEventMove_yPalace[t]];
    this.picture = AllEventIconPalace[t];

    this.size_x = AllEventSize_xPalace[t];
    this.size_y = AllEventSize_yPalace[t];
    this.sequence = AllEventSpriteSequencePalace[t];
    this.speed = AllEventSpeedPalace[t];

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



    this.information = AllEventInfPalace[t];
    this.action = [];
    this.action.push(AllEventActPalace[4*t]);
    console.log(AllEventActPalace[4*t].content);
    this.action.push(AllEventActPalace[4*t+1]);
    this.action.push(AllEventActPalace[4*t+2]);
    this.action.push(AllEventActPalace[4*t+3]);
    this.isBattle = false;
    if(AllEnemyIdPalace[t]>-1)
        this.enemy = new Enemy(AllEnemyIdPalace[t]);
    else
        this.enemy = null;
}
gEngine.Core.inheritPrototype(EventPalace, GameObject);