/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Result(msg, Health, mHealth, Hunger, mHunger, atk, def, pr) {
    this.Id = -1;
    this.msg = msg;   //the message of result
    this.Health = Health;    //effect to health value
    this.mHealth = mHealth;   //effect to max health
    this.Hunger = Hunger;    //effect to hunger value
    this.mHunger = mHunger;   //effect to max hunger
    this.atk = atk;
    this.def = def;
    this.numItem = false;
    this.getItem = [];  //the item id and number you can got
    this.escape = false;    //the flag of escape successfully or not
    this.pr = pr; //the probabilities of different result
}

Result.prototype.apply = function(mygame, bag){
    //console.log(mygame);
    //mygame.mHealth += this.Health;
    mygame.mHealthValue += this.Health;
    //mygame.mHunger += this.Hunger;
    mygame.mHungerValue += this.Hunger;
    mygame.mAttackValue += this.atk;
    mygame.mDefenseValue += this.def;
    if(this.numItem>0){
        for(var i=0;i<this.numItem;i++){
            bag.AddItem(this.getItem(i));
        }
    }
}