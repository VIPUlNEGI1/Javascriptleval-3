class user {
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email, password){
//    this (super ) keyword is very spical
        super(username)
        this.email= email
       this.password= password
    }
 addCorses(){
    console.log(`A new corse was added by ${this.username}`)
 }
}
const chai = new Teacher("chai","chai@teacher.com", "123")
chai.addCorses()

const masalaCHai = new user("masalaChai")
masalaCHai.logMe()


console.log(chai === masalaCHai)

console.log(chai instanceof user)