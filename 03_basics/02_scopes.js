//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=30
    // console.log("INNER: ", a);
    
}

// var can be accessed outside even if it is declared in block scope 
// var can give last declared value when it is declared in both global and block scope like here above code will give 30 not 300

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// here we accessed before declaration but due this particular type of function declaration this is not giving error 
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // THis will give error due this particular type of function declaration
const addTwo = function(num){
    return num + 2
}