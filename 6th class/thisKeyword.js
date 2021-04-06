// 'use strict';

function myName() {
    console.log('osama')
    // console.log(this)
}

var name = "abdul basit";
let anotherName = "waqas";

// myName(this.name);
// console.log(this)
// console.log(this.anotherName)


const person = {
    name: 'basit',
    age: 24,
    welcomeMsg: function() {
        return `Welcome ${this.name}`
    },

    welcomeMsgArrow: () => `Welcome ${this.age}`
}

// console.log(person.welcomeMsg())
console.log(person.welcomeMsgArrow())