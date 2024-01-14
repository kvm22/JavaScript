function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//basically ek execution context pass kr deta h function ko




//Imagine you have a function, like a recipe for making cookies. In JavaScript, sometimes you want this function to work with a specific set of ingredients (which we'll call "this") and also use some additional special ingredients (arguments).

// The 'this' is like the context or environment in which the function is executed. The call() method is like a way to use that recipe with specific ingredients and in a specific kitchen (context).