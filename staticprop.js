class User{
    constructor (userName){
       this.userName = userName 
    }
    logMe(){
        console.log(`username: ${this.userName}`)
    }
    // this static keyword stop to excess
  static  createId(){
        return `123`
    }
}
const vipul = new User('vipul')
// console.log(vipul.createId())
  
class teacher extends user{
    constructor(email ,userName){
        super(userName)
        this.email = email
    }
}
const iphone = new teacher ("iphon","1#phon.com")
console.log(iphone.createId())