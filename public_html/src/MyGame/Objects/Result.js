/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Result(msg, Health, mHealth, Hunger, mHunger, atk, def, money, isPrincessLocation,isPrincessAmbition ,id, num, id2, num2,  pr) {
    this.Id = -1;
    this.msg = msg;   //the message of result
    this.Health = Health;    //effect to health value
    this.mHealth = mHealth;   //effect to max health
    this.Hunger = Hunger;    //effect to hunger value
    this.mHunger = mHunger;   //effect to max hunger
    this.atk = atk;
    this.def = def;
    this.money = money;
    this.getItemNum = num;
    this.getItemId = id;
    this.dropItemId = id2;
    this.dropItemNum = num2;
    //this.getItem = [{"id":id,"num":num}];  //the item id and number you can got
    this.escape = true;    //the flag of escape successfully or not
    this.pr = pr; //the probabilities of different result
    this.isPrincessLocation = isPrincessLocation;
    this.isPrincessAmbition = isPrincessAmbition;
    this.flag = -1;
}

Result.prototype.apply = function(mygame, enemy){
    //console.log(mygame);
    //check the result
    if(mygame.mMoneyValue + this.money <0){
        this.msg = "not enough money";
        console.log(this.msg);
        return this.msg;
    }
    if(mygame.mBag.GetItemNum(this.dropItemId)>-1 && mygame.mBag.GetItemNum(this.dropItemId)<this.dropItemNum){
        this.msg = "not enough "+ NameList[this.dropItemId];
        console.log(this.msg);
        return this.msg;
    }
    
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
    mygame.mMoneyValue += this.money;


    if(mygame.isPrincessLocation==false && this.isPrincessLocation==1){
        mygame.isPrincessLocation=true;
        console.log("isPrincessLocation");
    }
    if(mygame.isPrincessAmbition==false && this.isPrincessAmbition==1){
        mygame.isPrincessAmbition=true;
        console.log("isPrincessAmbition");
    }

    
    //update items
    if(this.getItemNum>0){
        console.log("get "+this.getItemId);
        mygame.mBag.AddItem(this.getItemId, this.getItemNum);
    }
    if(this.dropItemNum>0){
        console.log("drop "+this.getItemId);
        mygame.mBag.AddItem(this.getItemId, this.getItemNum);
    }
    
    //fight
    if(!this.escape){
        return this.msg + enemy.fight(mygame);
    }
    // update attribute renderable
    mygame.mHealth.setText("Health: "+ mygame.mHealthValue+"/"+ mygame.mHealthValueMax);
    mygame.mHunger.setText("Hunger: " + mygame.mHungerValue + "/"+ mygame.mHungerValueMax);
    mygame.mAttack.setText("Attack: " + mygame.mAttackValue);
    mygame.mDefense.setText("Defense: " + mygame.mDefenseValue);
    mygame.mMoneyTexture.setText("Money: " + mygame.mMoneyValue);
    //console.log(this.flag);
    if(this.flag>0){
        
        mygame.eventFlag = this.flag;
    }
    return this.msg;
}
