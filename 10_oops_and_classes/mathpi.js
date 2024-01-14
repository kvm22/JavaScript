
// Get property descriptor for Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// Define an object named 'chai'
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    // Method to order chai
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// Get and log the property descriptor of "name" property in 'chai'
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Modify the property descriptor of "name" in 'chai'
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
});

// Log the updated property descriptor of "name" in 'chai'
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Loop through properties of 'chai'
for (let [key, value] of Object.entries(chai)) {
    // Exclude properties that are functions
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
