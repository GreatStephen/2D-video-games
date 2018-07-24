/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

var NameList = ["1", "2", "3"];
var InfoList = ["this is 1","this is 2","this is 3"];
var HealthList = [1,2,3];
var mHealthList = [0,0,0];
var HungerList = [10,2,3];
var mHungerList = [0,0,0];
var ColorList = [[1,0,0,1],[0,1,0,1],[0,0,1,1]];

function Item(id) {
    this.Id = id;
    this.Name = NameList[id];
    this.Health = HealthList[id];
    this.mHealth = mHealthList[id];  // mhealth add the maximum of the health
    this.Hunger = HungerList[id];
    this.mHunger = mHungerList[id];
    this.atk = 0;
    this.def = 0;
    this.renderable = new Renderable();
    this.renderable.setColor(ColorList[id]);
    
    this.Info = new FontRenderable(InfoList[id]);
    this.Info.setColor([1, 1, 1, 1]);
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
    
    // update attribute renderable
    mygame.mHealth.setText("Health: "+ mygame.mHealthValue+"/"+ mygame.mHealthValueMax);
    mygame.mHunger.setText("Hunger: " + mygame.mHungerValue + "/"+ mygame.mHungerValueMax);
    mygame.mAttack.setText("Attack: " + mygame.mAttackValue);
    mygame.mDefense.setText("Defense: " + mygame.mDefenseValue);
}