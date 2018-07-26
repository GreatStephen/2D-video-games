/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

var NameList = ["1", "2", "3"];
var InfoList = ["Apple: Hunger+10","Meat: Hunger+5","Fish: Hunger+5","Herb: Health+10","Timber: strange timber",
                "Axe: Attack+5","Spear: Attack+10","Sword: Attack+10","Shield: Defense+5","Shield: Defense+10"
                ];
var HealthList = [0,0,0,10,0,0,0,0,0,0,0,0];
var mHealthList = [0,0,0,0,0,0,0,0,0,0,0,0];
var HungerList = [10,5,5,0,0,0,0,0,0,0,0,0];
var mHungerList = [0,0,0,0,0,0,0,0,0,0,0,0];
var ColorList = [[1,0,0,0],[0,1,0,0],[0,0,1,0]];
var PictureList = ["assets/item/0_apple.png",
    "assets/item/1_meat.png",
    "assets/item/2_fish.png",
    "assets/item/3_herb.png",
    "assets/item/4_timber.png",
    "assets/item/5_axe.png",
    "assets/item/6_spear.png",
    "assets/item/7_sword.png",
    "assets/item/8_shield1.png",
    "assets/item/9_shield2.png",
    "assets/item/10_secretbag.png",
    "assets/item/11_cape.png",
    "assets/item/12_key.png",
    "assets/item/13_treasurechest.png"
];
var AtkList = [0,0,0,0,0,5,10,10,0,0,0,0];
var DefList = [0,0,0,0,0,0,0,0,5,10,0,0];
var TypeList = [0,0,0,0,1,2,2,2,3,3,0,0];  // 0: consume  1: cannot use   2: weapon  3:armor

function Item(id) {
    this.Id = id;
    this.Name = NameList[id];
    this.Health = HealthList[id];
    this.mHealth = mHealthList[id];  // mhealth add the maximum of the health
    this.Hunger = HungerList[id];
    this.mHunger = mHungerList[id];
    this.picture = PictureList[id];
    this.atk = AtkList[id];
    this.def = DefList[id];
    this.renderable = new TextureRenderable(this.picture);
    this.renderable.setColor([1,1,1,0]);
    this.type = TypeList[id];
    //this.renderable.getXform().setSize(2,2);
    
    this.Info = new FontRenderable(InfoList[id]);
    this.Info.setColor([0, 0, 0, 1]);
   // this.Info.getXform().setPosition(73, 44);
    this.Info.setTextHeight(2);
   // this.Info.draw(aCamera);
    
    this.eventType = -1;    //the item may have effect on the following event    
}

Item.prototype.Use = function(mygame){
    mygame.mHealthValue += this.Health;
    mygame.mHealthValueMax += this.mHealth;
    if(mygame.mHealthValueMax < mygame.mHealthValue){
        mygame.mHealthValue = mygame.mHealthValueMax;
    }
    mygame.mHungerValue += this.Hunger;
    mygame.mHungerValueMax += this.mHunger;
    if(mygame.mHungerValueMax < mygame.mHungerValue){
        mygame.mHungerValue = mygame.mHungerValueMax;
    }

    mygame.mAttackValue += this.atk;
    mygame.mDefenseValue += this.def;
    /*
    mygame.mAttackValue = 10+this.atk;
    mygame.mDefenseValue = 10+this.def;
    */

    // update attribute renderable
    mygame.mHealth.setText("Health: "+ mygame.mHealthValue+"/"+ mygame.mHealthValueMax);
    mygame.mHunger.setText("Hunger: " + mygame.mHungerValue + "/"+ mygame.mHungerValueMax);
    mygame.mAttack.setText("Attack: " + mygame.mAttackValue);
    mygame.mDefense.setText("Defense: " + mygame.mDefenseValue);
}