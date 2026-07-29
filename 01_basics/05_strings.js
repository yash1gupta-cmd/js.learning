const name= "YASH"
const repoCount = 20

// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('yash')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));
// console.log(gameName.search ("h"));

const newString = gameName.substring(0, 2)
// substring cant procsess minus value so its start from 0
console.log(newString)

const anotherString =gameName.slice(-3,3)
console.log(anotherString);

const newStringone = "   yash   "
// trim cut down extra spaces
console.log(newStringone.trim());


const url = "https://yash.com/yash%20gupta"
console.log(url.replace('%20', '-'));
console.log(url.includes('yash'));
console.log(url.includes('huhaih'));
