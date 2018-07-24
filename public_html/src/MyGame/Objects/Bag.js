/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var x = 72.2;
var y = 48.1;
var delta = 4.6;

function Bag(myTexture){
    console.log("hi");
    this.itemNum = 0;
    this.itemSet = [];   //items that in the bag,they are in order
    
    this.capacity = 20;
    
    this.bag = new TextureRenderable(myTexture);
    this.bag.setColor([0,0,0,0]);
    this.bag.getXform().setSize(30,60);
    this.bag.getXform().setPosition(82,50);
    
    for(var i=0;i<20;i++){
        this.AddItem(0);
        //this.AddItem(1);
    }
    
    
}

Bag.prototype.AddItem = function(id){
    this.itemSet[this.itemNum]=new Item(id);
    this.itemSet[this.itemNum].renderable.getXform().setSize(3.5,3.5);
    this.itemSet[this.itemNum].renderable.getXform().setPosition(x+(this.itemNum%5)*delta,y-Math.floor(this.itemNum/5)*delta);

   // console.log(Math.floor(this.itemNum/5));
    this.itemNum++;
};

/*Bag.prototype.AddItem1 = function(id){
    this.itemSet[this.itemNum]=new Item(id);
    this.itemSet[this.itemNum].renderable.getXform().setSize(3.5,3.5);
    this.itemSet[this.itemNum].renderable.getXform().setPosition(72.2,48.1);
    this.itemNum++;
};

Bag.prototype.AddItem2 = function(id){
    this.itemSet[this.itemNum]=new Item(id);
    this.itemSet[this.itemNum].renderable.getXform().setSize(3.5,3.5);
    this.itemSet[this.itemNum].renderable.getXform().setPosition(76.8,43.5);
    this.itemNum++;
};*/

Bag.prototype.Draw = function(aCamera){
    this.bag.draw(aCamera);
    for(var i=0;i<this.itemNum;i++){
        this.itemSet[i].renderable.draw(aCamera);
    }
};
