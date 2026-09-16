// for of 

// ["", "" , ""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`each charcter of ${greet}`);
}

// MAP
// MAP use for uniqe ids you cant use repitive data in it 

const map = new Map()
map.set('IND' , "INDIA")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IND' , "INDIA")

// console.log(map);

for (const [key , value] of map) {
    console.log([key , value]);
}
