///The map() method in JavaScript is used to iterate over an array and create a new array by performing an operation on each element of the original array. It executes a provided function once for each array element and constructs a new array by appending the results of the function calls.

//The basic syntax for map() is:

const newArray = array.map((currentValue, index, array) => {
    // return element for newArray
  });

  //A simple example of using map() to double each element in an array
  
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// hitesh sirs note

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// **"chaining array methods."**

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


//The map() functions transform each number according to the provided operations (multiplication by 10 and addition of 1). Then, the filter() method retains only the numbers that are greater than or equal to 40 from the modified array.

//If we run this code, it will output an array containing numbers that are the result of multiplying each original number by 10, adding 1 to that result, and finally, filtering out the numbers less than 40.
