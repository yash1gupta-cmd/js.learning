// singleton

// object literals

const mySym = Symbol("Key1")

const Jsuser = {
    name : "yash",
    "full name": "yash gupta",
    [mySym] : "Mykey1",
    // for symbol this is the syntax without string and in console we have to add [] without string 
    age : 19,
    Location : "jaipur",
    email : "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "yash@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "yashehehe.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS User");
    
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());



