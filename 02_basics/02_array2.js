const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // it pushes the second array into first array as element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  // concat array combines two array into one
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread Operator ... is used to combine multiple arrays into a single array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flatening of array into single one
console.log(real_another_array);

//different methods

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // Array.from() ---->it convert from string to array 
console.log(Array.from({name: "hitesh"})) // interesting as it gives [] as here it is key and value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() --->combines three values into a array