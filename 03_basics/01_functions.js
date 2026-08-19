function sayMYname(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}
// console.log(sayMYname);
// you cant print this
// () this is execute mean in below that how we execute a function
// sayMYname()



// function addTwoNumbers(number1 , number2) {
 
//    console.log(number1 + number2 );
   
// }
// addTwoNumbers(3, 4)

function addTwoNumbers(number1 , number2) {
 
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,5);
// console.log("result" , result);



function loginUserMessage(username) {
    if( username === undefined){
        console.log("please enter your user name"); 
        return   
    }
    return `${username} just login in`
    
}
// using return will return your value not  print it for printing we have to console.log 

// console.log(loginUserMessage("yash"));
// console.log(loginUserMessage(""));


function calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username: "yash",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const newArray =[200 ,400 ,100 ,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200 ,400, 500 ,800]));




