const myNums = [1,2,3]

// const Total = myNums.reduce( function (acc , currval) {
//     console.log(`acc value is ${acc} currval value is ${currval}`);
    
//     return acc + currval  
// }, 0)
// const Total = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(Total);

const ShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const newTotal = ShoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(newTotal);

