// reduce() method

//The reduce() method in JavaScript is used to iterate through an array and accumulate its elements into a single value. It executes a provided function for each element of the array, resulting in a single output value.


//An example of using reduce() to find the sum of elements in an array:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

/* 
In this above example:

accumulator starts with an initial value of 0.
The arrow function inside reduce() takes two arguments, accumulator and currentValue, and returns the sum of these two values.

During each iteration, the accumulator holds the cumulative sum of the elements in the array.

You can use reduce() for various purposes such as summing values, calculating averages, flattening arrays, or any other operation where you need to accumulate the values of an array into a single result.

*/

// ** Hitesh sir's note **

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



// use case example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);