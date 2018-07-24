/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

var NameList = ["1", "2", "3"];
var IntroList = ["this is 1","this is 2","this is 3"];
var HealthList = [1,2,3];
var mHealthList = [1,2,3];
var HungerList = [1,2,3];
var mHungerList = [1,2,3];
var ColorList = [[1,0,0,1],[0,1,0,1],[0,0,1,1]];

function Item(id) {
    this.Id = id;
    this.Name = NameList[id];
    this.Info = IntroList[id];
    this.Health = HealthList[id];
    this.mHealth = mHealthList[id];  // mhealth add the maximum of the health
    this.Hunger = HungerList[id];
    this.mHunger = mHungerList[id];
    this.renderable = new Renderable();
    this.renderable.setColor(ColorList[id]);
    this.eventType = -1;    //the item may have effect on the following event    
}
