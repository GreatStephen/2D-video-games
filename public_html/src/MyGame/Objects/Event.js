/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!
var AllEventIcon = ["1.png", "2.png", "3.png"];
var AllEventInf = ["this is event 1", "this is event 2", "this is event 3"];
var AllEventAct = [{"Action1":"a11", "Action2":"a12"}, {"Action1":"a21", "Action2":"a22"}, {"Action1":"a31", "Action2":"a32"}];

function Event(num) {
    var t = Math.floor(Math.random()*3);
    this.type = t;
    this.position = [100*num, 20];
    var AllColor = [];
    for(var i=0;i<3;i++){
        AllColor[i] = new Renderable();
        AllColor[i].getXform().setPosition(this.position[0], this.position[1]);
        AllColor[i].getXform().setSize(10, 10);
    }
    AllColor[0].setColor([1,0,0,1]);
    AllColor[1].setColor([0,1,0,1]);
    AllColor[2].setColor([0,0,1,1]);
    this.icon = AllColor[t];
    this.information = AllEventInf[t];
    this.action = AllEventAct[t];
    
}
gEngine.Core.inheritPrototype(Event, GameObject);




