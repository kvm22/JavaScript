// Normal comparisons
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Here it is liitle tricky cause of diffrent working of == and >=,<= and here we ARE comparing different datatypes like in first one string and number so sometimes it dosn't give predicatable result as null first converted into 0 or NaN then it  check it therefore so.

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
// for strict comparion -> checks if datatype is same then compare
console.log("2" === 2);