/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var x = 72.2; // x for the left top square
var y = 48.1;
var delta = 4.6;  // the side of each small suqare

var deltaMove = 0;

var CursorPosition = [x,y];

var InfoPosition =[72.2,48.1];

function Bag(myTexture,cursorTexture,myGame){

    this.current = 0;
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
    this.cursor.getXform().setPosition(CursorPosition);
    
    //for(var i=0;i<3;i++){
        this.AddItem(0);
        this.AddItem(1);
        this.AddItem(2);
    //}
    
    
}

Bag.prototype.AddItem = function(id){
    this.itemSet[this.itemSet.length]=new Item(id);
    this.itemSet[this.itemSet.length-1].renderable.getXform().setSize(3.5,3.5);
    //this.itemSet[this.itemSet.length-1].renderable.getXform().setPosition(x+((this.itemSet.length-1)%5)*delta,y-Math.floor((this.itemSet.length-1)/5)*delta);
    this.itemSet[this.itemSet.length-1].renderable.getXform().setPosition(x,y);

   // console.log(Math.floor(this.itemNum/5));
   //thi this.itemNum++;
};

Bag.prototype.RemoveItem = function(){
    console.log("!");
    console.log(this.current);
    this.itemSet.splice(this.current,1);
    if(this.current!=0) this.current--;
}


Bag.prototype.Move = function(deltaX){
    var temp = this.bag.getXform().mPosition;
    this.bag.getXform().setPosition(temp[0]+deltaX,temp[1]);
   // temp = this.cursor.getXform().mPosition;
   // this.cursor.getXform().setPosition(temp[0]+deltaX,temp[1]);   
    x += deltaX;
    deltaMove += deltaX;
    InfoPosition[0] += deltaX;
};

Bag.prototype.Draw = function(aCamera){
    // draw the bag
   // this.bag.draw(aCamera);
    
    // draw the items
    for(var i=0;i<this.itemSet.length;i++){
        this.itemSet[i].renderable.getXform().setPosition(x+(i%5)*delta,y-Math.floor(i/5)*delta);
        this.itemSet[i].renderable.draw(aCamera);
    }

    // draw the cursor
    if(this.itemSet.length!=0){
        //console.log(x+(this.current%5)*delta);
        //console.log(y-Math.floor(this.current/5)*delta);
        this.cursor.getXform().setPosition(x+(this.current%5)*delta,y-Math.floor(this.current/5)*delta);
        this.cursor.draw(aCamera);
        console.log(InfoPosition);
        //console.log(this.current);
        this.itemSet[this.current].Info.getXform().setPosition(InfoPosition);
        this.itemSet[this.current].Info.draw(aCamera);
    }
    

    
};

Bag.prototype.update = function(){   
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Left)){
        if(this.current%5!=0){
            this.current--;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Right)){
        if((this.current%5!=4) && ((this.current+1)<this.itemSet.length)){
            this.current++;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Up)){
        if(this.current>4){
            this.current -= 5;
        }
    }
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Down)){
        if((this.current<15) && ((this.current+5)<this.itemSet.length)){
            this.current += 5;
        }
    }  
    
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.Enter)){
        this.itemSet[this.current].Use(this.myGame);
        this.RemoveItem();
    }  
}
