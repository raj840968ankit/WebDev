class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    //functions
    encryptPassword(){
        return `${this.password}abc`
    }

    userUppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const ankit = new User("ankit", "ankit@gmail.com", '123')
console.log(ankit.encryptPassword());
console.log(ankit.userUppercase());
