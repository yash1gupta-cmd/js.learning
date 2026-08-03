// const tinderuser = ()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yash",
            lastname: "gupta",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2 , obj3) 
// {} using this is not nessary but this is a good pratice to assign value like this 
const obj4 = {...obj1,...obj2}

// console.log(obj4);

const user =[
{
    id: 1, 
    email: 2,
},
{
    id: 1, 
    email: 2,
},
{
    id: 1, 
    email: 2,
},
{
    id: 1, 
    email: 2,
},
{
    id: 1, 
    email: 2,
},
]
user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('isLogged'));










