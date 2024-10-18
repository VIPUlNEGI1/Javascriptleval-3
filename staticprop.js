class User{
    constructor (userName){
       this.userName = userName 
    }
    logMe(){
        console.log(`username: ${this.userName}`)
    }
    createId(){
        return `123`
    }
}