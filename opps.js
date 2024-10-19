//  why are opps in js

// opps consept 

// what is object litral : it means we make the object

const user = {
     username : "hitesh ",
     loginCOunt : 8,
      singdin: true,
      getUserdaitile: function(){
        console.log('got the user detils from database')
        console.log(this.user)
        console.log(this)
      }
}

console.log(user.username)
console.log(user.getUserdaitile())
// this keyword
console.log(this)



// constructer function

// const promissOne  = new Promise()
// const data = new Date()

function User (username ,loginCount ,isLoggedin){
    this. username  = username;
    this.loginCount = loginCount;
    this. isLoggedin = isLoggedin;

//  we can also make  function

this . greeting = function(){
    console.log(`welcon=me ${this.username}`)
}
return this
}
// without not using new keyword the value was overwrited but if we are using this keyword the value not be overwrited
const  oneuser = User("vipul",12, true)
const  Towuser = User("hetesh nagar", 20, false)


const  oneUser =  new User("vipul",12, true)
const TowUser = new  User("hetesh nagar", 20, false

    // the process of new keyword first type the new then neew keyword make the empty object  { } then it is copy the print the data in the array {} 
)