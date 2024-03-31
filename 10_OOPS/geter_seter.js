class User{
    constructor(email,password){
        this.email = email
        this.password = password
 
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
         this._email = email
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const vinay = new User("h@gmail.com","123")
console.log(vinay.password)