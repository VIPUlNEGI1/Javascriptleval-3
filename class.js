class user {
    // this is very important in classes because when i call a class  i must be call this constructor 
    constructor(username, email,password){
   this.username = username;
   this.password = password
   this.email= email
    }
    encrouptPassword (){
      return `${this.password}abc`  
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("chai", "chai@gmail.com","123")
console.log(chai.encrouptPassword())
console.log (chai.encrouptPassword())


// behind the sean kya hoo ra hai 
// if we used no class
function User(username, email,password){
    this.username = username;
   this.password = password
   this.email= email 
}

User.prototype.encrouptPassword = function(){
    return `${this.password}abc`
}
User.prototype.encrouptPassword = function(){
    return ` ${this.username.toUpperCase()}abc`
}

const DARU = new user("chai", "chai@gmail.com","123")
console.log(DARU.encrouptPassword())
console.log (DARU.encrouptPassword())
