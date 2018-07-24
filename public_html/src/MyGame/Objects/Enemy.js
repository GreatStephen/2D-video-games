/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Enemy() {
   
    this.Id = -1;
    this.msg = null;   //the description of enemy
    
    // attribute
    this.mHealth = 0;    
    this.atk = 0;
    this.def = 0;
    
    //
    this.numItem = 1;
    this.dropItem = [0];  //the item id and number you can got
    
}

Enemy.prototype.fight = function (game){
    var total = 0;
    var msg;
    var dmg1 = this.atk - game.mDefenseValue;
    if(dmg1 < 0)
        dmg1 = 0;
    var dmg2 = game.mAttackValue - this.def;
    if(dmg2 < 0)
        dmg2 = 0;
    console.log(dmg1);
    console.log(dmg2);
    while(game.mHealthValue > 0 && this.mHealth > 0){
        this.mHealth -= dmg2;
        game.mHealthValue -= dmg1;
        total += dmg1;
    }
    if(game.mHealthValue <= 0){
        gEngine.GameLoop.stop();
        msg = "you lose";
        return msg;
    }   
    else if(this.numItem>0){
        for(var i=0;i<this.numItem;i++){
            game.mBag.AddItem(this.dropItem[0]);
        }
    }
    msg = "You win, you lose " + total + " HP, get item " + this.dropItem[0];
    return msg;    
}
