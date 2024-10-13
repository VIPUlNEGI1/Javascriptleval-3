// // what is prototype

// function name1(params) {
//     return params +4
// }
// name1.power = 2
// console.log(name1(5))
// console.log(name1.power)
// console.log(name1.prototype)

// // function vipulUSer(e, u){
// //     this.username = username
// //     TimeRanges.score = score
// // }
// // vipulUSer.protoType.increment = function () {
// // u++
// // }
// // vipulUSer.prototype.printme = function(){
// //     console.log(`score is ${this.score}`)
// // }
// // const chai = new vipulUSer('vipu' ,25)
// // const ter = vipulUSer('tea',230)
// // chai.printme()


// // new keyword

// // notes -: heare's what happens behind the scenses when the new keyword is use

// // A new object is created : the new keyword initiates the creation of a new javaScript object.
// //  A prototype is linked : the newly created object gets linked to the prototype property of the constructor function , this mens that it has access to properties and method defined on the constructor's prototype. 

// // the constructure is called is called: the constructure function is called with the specified arguments and this is bound to the newly created Object, if non explicit return value is specified fron the constructur, javascript assume this.

// // the new object is ruturened : After the constructure function has been called is it doesnt's return a non-primitive value (object, array , function ,etc .), the newly created object is returned


// // prototype code

// // let myname = "vipul    "
// // console.log(myname.trim().length)

// // the better way by true length truelength
// let Myname = "papa   "
// let Mymon = "muma"
// // console.log(Myname.trueLength())

// let MYheros = ["godda ", "Jouaa"]

// let heroPower = {
//     godda: "before 4 months",
//     Jouaa : "sussess baby",
  
//     getsetPower:function(){
//         console.log(`godda powreis ${this.godda}`)
//     }
// }
// Object.protoType.vipul = function () {
//    console.log(`vipul is present is all object`) 
// }
// // heroPower.vipul()

// MYheros.vipul()



// code with harry
 

// what is the prototype : it is very hare to explane ... the prototype is used to give the value of the objecd  and it is very usefull to javascript  and and and it is also  find the porpreites in a code for example we have a two function first have the method but secound one have not and we call secound function  in this  condition secound one goes to first function or object and inharite the properity but we wanna bothe name are same 
//in simple way one object inharete the proprety of outher object
// and and and .this is used to specify the the object which are excuted
// we can make prototype chain 
