
// Primitive (stack)   and   Non primitive(heap)
// example of stack memory 


/* when variables are declared they stored  in stack memory  when we create a variable var2 and assign var2 to var1  basically  we get a copy of var1 to var2 and when we change var2 then change will only take place in var2 not var 1 as copy was given change will reflect in only var2 */

/* primitive wale stack me jate h aur jab fir stack se wapas se reference lete h to copy milta h kyun ki primitive datatypes are immutable in js */ 

let Myname="Vabhav"
let anotherName=Myname
anotherName="Kunwar"

console.log(Myname)
console.log(anotherName)

//example of heap memory

let userOne={
    email:"vabhavmishra34@gmail.com",
    name: "vabhav",
}

/* non primitive wale heap me jate h aur jab heap se wapas se reference lete h to copy nahi milta h balki original value ka reference milta h*/



let userTwo=userOne

userTwo.email="xplosiv23@gmail.com"

console.log(userOne)
console.log(userTwo)


