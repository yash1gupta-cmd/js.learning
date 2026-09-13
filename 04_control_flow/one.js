// if 
const isLoggedIN = true
const temp =  51

// if (temp < 50 ) {
//     console.log("executed");
// }
// else {
//     console.log("too hot outside");
// }


/* < less than , > greater than , <= less than or eqaul to , >= greater than or equal to , == equal to , != not equal to , === even check data type  , !== if data type is no same */


const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power is ${power}`);
// }

// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// if (balance < 500) {
//     console.log("less than 500 ");
// }
// if (balance < 750) {
//     console.log("less than 750");
// }
// if (balance < 900) {
//     console.log("less than 900");   
// }
// else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true 
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInfromEmail = true

// && (and) is used for matching both conditon 
// || (or) is used for if the one conditon match 
if (userLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInfromEmail) {
    console.log("ok");
}