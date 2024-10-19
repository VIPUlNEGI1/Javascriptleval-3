// object.getOwnPropertyDescriptor(Math)

const { object } = require("prop-types");
const { Writable } = require("stream");

// console.log(Math.PI)
// Math.PI = 5


const discripter = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(discripter)

const chai = {
    name : "ginger tea",
    price : 250,
    isablale : true
}
console.log(Object.getOwnPropertyDescriptor(chai))
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

// how change the property
// Object.defineProperty(chai,'name',{
//     Writable : false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name'))

// hey this is small part of Object.entries(chai) this thing help to itrate our objects 
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`)
    }
}