// Immediately Invoked Function Expression (IIFE) 

(function chai() {
    // this is called named iife 
    console.log(`DB CONNECTED`);
    
})() ;

// semi colaum is must used for this for creating a new onee 
// (()=> {
//     console.log('yash');
    
// })()


((name)=> {
    // this is unamed iife 
    console.log(`my name is  ${name}`);
    
})('yash')

// IIFE used for global pollution  and that is so the global pollution dont dsitub this 

// (first use for function defination ) ( this one is for execution ) 
