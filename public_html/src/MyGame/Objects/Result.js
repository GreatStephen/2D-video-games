/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Result(msg, Health, mHealth, Hunger, mHunger, atk, def, id, num,  pr) {
    this.Id = -1;
    this.msg = msg;   //the message of result
    this.Health = Health;    //effect to health value
    this.mHealth = mHealth;   //effect to max health
    this.Hunger = Hunger;    //effect to hunger value
    this.mHunger = mHunger;   //effect to max hunger
    this.atk = atk;
    this.def = def;
    this.numItem = num;
    this.getItemId = id;
    //this.getItem = [{"id":id,"num":num}];  //the item id and number you can got
    this.escape = true;    //the flag of escape successfully or not
    this.pr = pr; //the probabilities of different result
}

Result.prototype.apply = function(mygame, enemy){
    //console.log(mygame);
    // update attribute value
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
    //update items

    if(this.numItem>0){
        for(var i=0;i<this.numItem;i++){
            mygame.mBag.AddItem(this.getItem);
        }
    }
    if(!this.escape){
        this.msg = enemy.fight(mygame);
    }
    // update attribute renderable
    mygame.mHealth.setText("Health: "+ mygame.mHealthValue+"/"+ mygame.mHealthValueMax);
    mygame.mHunger.setText("Hunger: " + mygame.mHungerValue + "/"+ mygame.mHungerValueMax);
    mygame.mAttack.setText("Attack: " + mygame.mAttackValue);
    mygame.mDefense.setText("Defense: " + mygame.mDefenseValue);
}