const mcu_heros = ["thor" ,"ironman" , "spiderman"]
const dc_heros = ["superman" ,"flash" , "batman"]

// mcu_heros.push(dc_heros)

// console.log(mcu_heros);
// console.log(mcu_heros[3][1]);

// const allHeros= mcu_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...mcu_heros,...dc_heros]
// console.log(all_new_heros);

const anotehr_array =[1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotehr_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("yash"));
console.log(Array.from("yash"));
console.log(Array.from({name: "yash"}));//intersting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

 
