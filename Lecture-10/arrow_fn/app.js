

// function cube(){
//     return a*a*a;
// }

// console.log( cube(6) );

// -------------------------------

// const cube = (a)=>{
//     return a*a*a;
// }

// console.log( cube(6) );


// -------------------------------

// const cube = (a)=> a*a*a;


// console.log( cube(6) );


// -------------------------------

// const cube = a => a*a*a;


// console.log( cube(6) );


// -------------------------------

let obj = {
    a: 10,
    fn: ()=>{
        console.log(this);   //window
    }
}

obj.fn();




