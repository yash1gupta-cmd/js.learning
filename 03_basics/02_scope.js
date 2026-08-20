// var  c = 300
let a = 300
// out side of curly braces called global scope 
{
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner:" , a );

    
}

// console.log(a);


// console.log(b);
// console.log(c);

function one(){
    const username = "yash"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()   
}
// function can be executed /
// one()

if (true) {
    const name = "yash"
    if (name === "yash") {
        const website = " youtube"
        // console.log(name + website);  
    }
    // console.log(website);

    // scope is in {} so if you want to print the code out side of the scope that's would not run 
}
// console.log(name);


// ++++++++++++++++++interesting concept ++++++++++++++++++ 


console.log(addone(5));
// this can be used as noraml function 
function addone(num) {
    return num + 1
}

// console.log(addtwo (5));
const addtwo = function (num) {
    return num + 2
}
//  if you  do the same you get the erorr 
// reason is you alredy declare the const mean variable is declared so you cant access this early this is type type of hoisting


