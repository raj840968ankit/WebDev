class User {
    constructor(email, password) {
        this.email = email;       // calls the setter
        this.password = password; // calls the setter
    }

    // Getter for email (name of property and getter method must be same e.g. email for email)
    get email() {
        return this._email.toUpperCase(); // returns in uppercase
    }

    // Setter for email...........here setter and setter are not the function....they are property
    set email(value) {
        this._email = value;  //here underscore( _ ) make the property as private
    }

    // Getter for password
    get password() {
        return `${this._password}hitesh`; // adds 'hitesh' when read
    }

    // Setter for password
    set password(value) {
        this._password = value;
    }
}

const user1 = new User("example@gmail.com", "12345");

console.log(user1.email);    // "EXAMPLE@GMAIL.COM"
console.log(user1.password); // "12345hitesh"