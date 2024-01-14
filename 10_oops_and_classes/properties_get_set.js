// Constructor function User
function User(email, password){
    // Private properties with an underscore prefix
    this._email = email;
    this._password = password;

    // Define a getter and setter for the email property
    Object.defineProperty(this, 'email', {
        get: function(){
            // Return the uppercase version of _email
            return this._email.toUpperCase();
        },
        set: function(value){
            // Set the email property to the provided value
            this._email = value;
        }
    });

    // Define a getter and setter for the password property
    Object.defineProperty(this, 'password', {
        get: function(){
            // Return the uppercase version of _password
            return this._password.toUpperCase();
        },
        set: function(value){
            // Set the password property to the provided value
            this._password = value;
        }
    });
}

// Create an instance of the User object
const chai = new User("chai@chai.com", "chai");

// Log the uppercase email property of the chai object
console.log(chai.email);  // Outputs: CHAI@CHAI.COM
