//two types  objects
// 1. singleton
// Object.create

// 2.object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "VABHAV",
    "full name": "KUNWAR VABHAV MISHRA",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vabhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // accessing objects
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vabhav@chatgpt.com"
// Object.freeze(JsUser)  
// freeze method is used to freeze the object so values can't changed/modified 
JsUser.email = "vabhav@microsoft.com"
// console.log(JsUser);

//In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

//Basically koi diff nahi h simply variable ki tarah treat hota h 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this kyword to reference into same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());