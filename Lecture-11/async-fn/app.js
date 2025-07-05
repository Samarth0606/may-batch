

// function samarth(){

// }
// console.log( samarth() ); //undefined

// -----------------------------------------

// function samarth(){

// }
// console.log( new samarth() ); // {}


// -----------------------------------------

// async function samarth(){
    
// }
// console.log( samarth() ); //always gives you a promise


// ----------------------------------------------------------------------


// async function samarth2(){
//     return 100
// }
// console.log( samarth2() ); 

// ----------------------------------------------------------------------

let luck = 1;

async function samarth2(){
    if(luck > 5){
        return new Promise((resolve,reject)=>{ resolve("balle balle") })
    }else{
        return new Promise((resolve,reject)=>{ reject("better luck next time") })
    }
}
console.log( samarth2() ); 