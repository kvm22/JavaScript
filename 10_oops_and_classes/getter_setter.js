

// Define a User class
class User {
    // Constructor with email and password parameters
    constructor(email, password){
        // Use setters to initialize email and password properties
        this.email = email;
        this.password = password;
    }

    // Getter for email property
    get email(){
        // Return the uppercase version of _email
        return this._email.toUpperCase();
    }

    // Setter for email property
    set email(value){
        // Set the email property to the provided value
        this._email = value;
    }

    // Getter for password property
    get password(){
        // Return the password property with "hitesh" appended
        return `${this._password}hitesh`;
    }

    // Setter for password property
    set password(value){
        // Set the password property to the provided value
        this._password = value;
    }
}

// Create an instance of the User class
const hitesh = new User("h@hitesh.ai", "abc");

// Log the email property of the hitesh object
console.log(hitesh.email);  // Outputs: H@HITESH.AI
