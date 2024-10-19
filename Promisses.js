// how to make a promise 


// const { rejects } = require("assert")
// const { userInfo } = require("os")
// const { resolve } = require("path")

// first make a new promise then make a new function  in this function have two parts fist one is resolve (it means our promise is resolve ) and the secound one is  reject (it means aur prommiss was rejected) then  the simple part have the function condition 
const promiseOne = new Promise(function(resolve,reject){

    // this function do an async task and Db calls ,criptography and network task
    setTimeout(function(){
     console.log('vipul is not a good person')
    //  this is the way how we conect the resolve toto our  promiseOne function 
     resolve()
    },1000)
})

// how to consume the  promise -: .then is the way to we are consume our promise because it .then is conected our resolve part
promiseOne.then(function () {
    console.log("promise consumed")
})



// the another way
new Promise(function(resolve,reject){
    setTimeout(function(){
console.log('asyng task to 2')
resolve()
    },1000)
}).then(function(){
    console.log("task compleated 2")
})

// how to we consume the data
// const promis3 = Promise(function(resolve,reject){
//     setTimeout(function(){
// resolve({usename : "chai", email: "vipul@gmail.com"})

//     },1000)
// })
// promis3.then(function(user){
// console.log(user)
// })

const promis4 = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"vipul" , password:"1234"})
    } else{
        reject("Erroe somthing fisy")
    }
   },1000) 
})
// chaining method

promis4.then((user)=>{
    console.log(user);
    return user.username
//   this .then is the channing methode this is very important for our database connection   
}).then((username)=>{
   console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('the promise is eather resolve or rejectid'))


// promiss five
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript" , password:"1234"})
        } else{
            reject("Erroe somthing not javascript ")
        }
       },1000) 
    })

    // next(other approach) approch
   async function consumepromissfive() {

  try{
    const response = await promiseFive
    console.log(response)
  }catch(error){

      console.log(error)
       }
}
   consumepromissfive()
// async await this is similar to the .then . it wait the for work  proccesss then it compleate it but if our process are not work properly it shows the error

// it i have  a small issue it can be not solve      .catch gressfuly
async function getallusers() {
   try{
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    console.log(response)

// this responce .json is convert our fetch url data into systematic formate but it takes so many time that's why we used await keyword to make this process fast
    const data= await response.json()
    console.log(data)
   } catch(error){
      console.log("E:  ", error)
   }
}
// getallusers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))