function sayMyName() {
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
}

// sayMyName this is only Reference
// sayMyName() this  execute

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
    //  console.log("yash");
    //  after return nothing got print 


}

const result = addTwoNumbers(3, 4)
//  console.log("Result: ", result);


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("enter your username");
        return
        
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("username"))
console.log(loginUserMessage())

