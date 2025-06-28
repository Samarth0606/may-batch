

// function remote(){

// }
// console.log( remote() );


// ---------------------------------


// function remote2(){

// }
// console.log( remote2() );     // undefined
// console.log( new remote2() ); // {}

// then that remote2 is not just a fn it becomes a constructor fn
// constructor fn => the role of constructor fn is to create objects


// ---------------------------------

// function remote2(){
//     this.naam = "Samarth";
//     this.age = 12;
// }

// let o1 = new remote2();
// let o2 = new remote2();
// console.log(o1);
// console.log(o2);


// ---------------------------------


// function remote2(username,umar){
//     this.naam = username;
//     this.age = umar;
// }

// let o1 = new remote2("Samarth"  , 23);
// let o2 = new remote2("Maverick" , 25);
// console.log(o1);
// console.log(o2);


// ---------------------------------

function remote2(username,umar){
    this.naam = username;
    this.age = umar;
    this.greet = function(){
        console.log("welcome to samarth classes");  
    }
}

let o1 = new remote2("Samarth"  , 23);
let o2 = new remote2("Maverick" , 25);
let o3 = new remote2("Kashish" , 35);
let o4 = new remote2("Book" , 5);
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);