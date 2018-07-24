/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

function Bag(myTexture){
    console.log("hi");
    this.capacity = 20;
    this.itemSet = null;
    this.bag = new TextureRenderable(myTexture);
    this.bag.setColor([0,0,0,0]);
    this.bag.getXform().setSize(30,60);
    this.bag.getXform().setPosition(82,50);
}


