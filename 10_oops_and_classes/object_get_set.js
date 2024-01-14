const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

// // User object with _email and _password properties, and getter and setter for email
// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",

//     // Getter for email property
//     get email(){
//         return this._email.toUpperCase();
//     },

//     // Setter for email property
//     set email(value){
//         this._email = value;
//     }
// };

// // Create a new object 'tea' using 'User' as its prototype
// const tea = Object.create(User);

// // Log the email property of the 'tea' object
// console.log(tea.email);  // Outputs: H@HC.COM
