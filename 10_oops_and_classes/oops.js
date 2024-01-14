const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Below is example of constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/*
In JavaScript, the new keyword is used to create instances of objects from constructor functions or classes. When you use new followed by a constructor function or a class, it allocates memory for a new object, sets up the object's prototype chain, and calls the constructor to initialize the object. The result is a new instance of the specified object.

Here's a simple example using a constructor function:
*/ 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating an instance of the Person object using new
  const person1 = new Person('John', 25);
  
  console.log(person1.name); // Output: John
  console.log(person1.age);  // Output: 25


  //In this example, Person is a constructor function, and new Person('John', 25) creates a new instance of the Person object with the specified name and age.


  //Similarly, you can use the new keyword with ES6 classes:


  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Creating an instance of the Person class using new
  //const person1 = new Person('John', 25);
  
  console.log(person1.name); // Output: John
  console.log(person1.age);  // Output: 25

  //The new keyword is crucial when working with constructor functions or classes to instantiate objects. Without it, the constructor function or class is treated as a regular function, and it won't create a new instance with the necessary setup.
  