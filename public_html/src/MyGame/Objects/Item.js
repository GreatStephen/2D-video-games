/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

this.AllItem = ["1.png", "2.png", "3.png"];

function Item() {
    this.Id = -1;
    this.Info = "";
    this.Health = 0;
    this.mHealth = 0;
    this.Hunger = 0;
    this.mHunger = 0;
    this.render = null;
    this.eventType = -1; 
    
}

Item.setRender = function (r){
    this.render = r;
}