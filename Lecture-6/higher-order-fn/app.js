
// HOF 

// function a(x){
//     console.log("I am HOF");
//     console.log(x);
// }

// function b(){}

// a(10)

// ---------------------------

//higher order fn - 1
// function a(fn){ //parameter
//     console.log("I am HOF");
//     fn();
// }

// function b(){
//     console.log("I am B");
// }

// a(b) //argument

// ---------------------------

//higher order fn - 2
// function a(){
//     console.log("i am a");
//     function b(){
//         console.log("i am b");
//     }
//     return b;
// }
// a()

// ---------------------------

// HOF both cases true
function a(fn){ 
    return fn;
}

//cb fn
function b(){
    console.log("I am B");
}

a(b) 