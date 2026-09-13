// const email = "yash@123.ai"
const email = []
if (email) {
    console.log("got user email");
}
else{
    console.log("i dont have one ");
    
}
// falsey value  
// false , 0 , -0 , BigInt 0n , "" (empty string ) ,  null , undefined , NaN  other than this all are truthy value 

// truthy value 
//  "0" , " " (if there is space than this is truthy value) , 'false' , {} , [] , function (){}

if (email.length === 0) {
    console.log("this is a empty array");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {

    console.log("this is a empty object");
}

// Nullish coalescing Operator (??): Null undefined 

let = "val1";
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1);



// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80  ? console.log("less than 80") : console.log("more than 80");


 