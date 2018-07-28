/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function EventPalaceSet(num) {

    // 0号位置不要
    var order = [-1,-1,-1,7,-1,-1,6,-1,-1,7,-1,-1,7,-1,-1,-1,-1];
    var index = 1;
    var mEventSet=[];

    for(var i=0;i<num;i++){
        mEventSet = this.forward();
    }

    //console.log(mEventSet);
    return mEventSet;
}
gEngine.Core.inheritPrototype(EventSet, GameObjectSet);

EventPalaceSet.prototype.forward = function () {
    this.mEventSet.push(new EventTown(this.index++, this.order[this.index]));
    return this.mEventSet;
}

