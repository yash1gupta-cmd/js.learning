const user = {
     username: "hitesh",
     price: 999,

     welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
      //   console.log(this);
        
        
     }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//    let  username = "yash"
//    console.log(this.username);
// }
// chai()

// const chai = function () {
//    let username = "yash"
//    console.log(this.username);
// }


const chai =  () => {
   let username = "yash"
   console.log(this);
}

// chai()

// const addnum = (num1, num2) =>{
//    return num1 +num2 
// }
// using return called explicit return and not using called implicit return 

// if you use cruly braces than you have to use return 

// const addnum = (num1, num2) => num1 +num2 

// const addnum = (num1, num2) => (num1 +num2 )

// for objects where you need to add curly barces 
const addnum = (num1, num2) => ({username: "yash"})

// console.log(addnum(3,4));
console.log(addnum());


