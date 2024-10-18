// what is excautionContext

function SetUsername(username){

    this.username = username
    console.log('called')
}

function createUser ( username , email, password){
    SetUsername.call(this, username).
    this.email = email
    this.password = password
// this.username = username

}
const chai = new createUser('chai','chai@gmail.com','12345y')
console.log(chai)