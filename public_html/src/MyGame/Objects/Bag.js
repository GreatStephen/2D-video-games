/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var x = 72.2;
var y = 48.1;
var delta = 4.6;
var deltaMove = 0;
var lastMove=0;

function Bag(myTexture,cursorTexture,myGame){
    console.log("hi");
    this.current = 0;
    this.itemNum = 0;
    this.itemSet = [];   //items that in the bag,they are in order
    
    this.capacity = 20;
    
    this.myGame = myGame;
    
    this.bag = new TextureRenderable(myTexture);
    this.bag.setColor([0,0,0,0]);
    this.bag.getXform().setSize(30,60);
    this.bag.getXform().setPosition(82,50);

    this.cursor = new TextureRenderable(cursorTexture);;
    this.cursor.setColor([0,0,0,0]);
    this.cursor.getXform().setSize(5.7,5.7);
    this.cursor.getXform().setPosition(x,y);
    
   // for(var i=0;i<20;i++){

    for(var i=0;i<3;i++){

        this.AddItem(0);
        //this.AddItem(1);
    }
    
    
}

Bag.prototype.AddItem = function(id){
    //console.log(this.itemSet.length);
    this.itemSet[this.itemSet.length]=new Item(id);
    this.itemSet[this.itemSet.length-1].renderable.getXform().setSize(3.5,3.5);
    this.itemSet[this.itemSet.length-1].renderable.getXform().setPosition(x+((this.itemSet.length-1)%5)*delta,y-Math.floor((this.itemSet.length-1)/5)*delta);

   // console.log(Math.floor(this.itemNum/5));
   //thi this.itemNum++;
};

Bag.prototype.RemoveItem = function(){
    console.log("!");
    console.log(this.current);
    this.itemSet.splice(this.current,1);
    this.current--;
}


Bag.prototype.Move = function(deltaX){
    var temp = this.bag.getXform().mPosition;
    this.bag.getXform().setPosition(temp[0]+deltaX,temp[1]);
    temp = this.cursor.getXform().mPosition;
    this.cursor.getXform().setPosition(temp[0]+deltaX,temp[1]);
    
    deltaMove += deltaX;
};

Bag.prototype.Draw = function(aCamera){
    //console.log(move);
   // console.log(lastMove);
    this.bag.draw(aCamera);
    if(deltaMove!=0){
        for(var i=0;i<this.itemSet.length;i++){
            var temp = this.itemSet[i].renderable.getXform().mPosition;
            this.itemSet[i].renderable.getXform().setPosition(temp[0]+deltaMove,temp[1]);
            this.itemSet[i].renderable.draw(aCamera);
        }
        deltaMove=0;
    }
    else{
        for(var i=0;i<this.itemSet.length;i++){
            //var temp = this.itemSet[i].renderable.getXform().mPosition;
           // this.itemSet[i].renderable.getXform().setPosition(temp[0]+move,temp[1]);
            this.itemSet[i].renderable.draw(aCamera);
        }
    }
    this.cursor.draw(aCamera);
};

Bag.prototype.update = function(){
    var temp = this.cursor.getXform().mPosition;
    
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Left)){
        if(this.current%5!=0){
            this.current--;
            temp[0] -= delta;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Right)){
        console.log(this.current);
        console.log(this.itemSet.length);
        if((this.current%5!=4) && ((this.current+1)<this.itemSet.length)){
            this.current++;
            temp[0] += delta;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        if(this.current>4){
            this.current -= 5;
            temp[1] += delta;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        if((this.current<15) && ((this.current+5)<this.itemSet.length)){
            this.current += 5;
            temp[1] -= delta;
        }
    }  
    
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)){
        //this.itemSet[this.current].Use(this.myGame);
        this.RemoveItem();
    }  
}
