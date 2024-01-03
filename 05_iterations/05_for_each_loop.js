const coding = ["js", "ruby", "java", "python", "cpp"]


// It is simple to used  in arrays ,objects


coding.forEach( function (val){
    console.log(val);
} )


/*
This code will iterate over each element in the coding array and log each value to the console.
The forEach() method takes a callback function as an argument. The callback function is called once for each element in the array. The callback function can take any number of arguments, but it must always return a value.
The forEach() method is a very useful tool for iterating over arrays. It is much simpler to use than a traditional for loop, and it is also more efficient.
*/


// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);

} )