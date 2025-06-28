
// function Person(naam,umar,kaam){
//     this.name = naam;
//     this.age = umar;
//     this.work = kaam;
//     this.greet = function(){ console.log("welcome to constructor") }
// }

// let p1 = new Person("maverick" , 3 , "sleep");
// let p2 = new Person("sam", 4 , "teach");
// let p3 = new Person("ac" , 1 , "cool");
// console.log(p1); console.log(p2); console.log(p3);

// -------------------------------------------
// class Person2{
//     constructor(naam,umar,kaam){
//         this.name = naam;
//         this.age = umar;
//         this.work = kaam;
//     }
//     greeting(){ console.log("welcome to classe") }
// }

// let p11 = new Person2("maverick" , 3 , "sleep");
// let p22 = new Person2("sam", 4 , "teach");
// let p33 = new Person2("ac" , 1 , "cool");

// console.log(p11); console.log(p22); console.log(p33);


// -------------------------------------------


// function Person(naam,umar,kaam){
//     this.name = naam;
//     this.age = umar;
//     this.work = kaam;
//     // this.greet = function(){ console.log("welcome to constructor") }
// }

// Person.prototype.greet = function(){ console.log("welcome to constructor") }

// let p1 = new Person("maverick" , 3 , "sleep");
// let p2 = new Person("sam", 4 , "teach");
// let p3 = new Person("ac" , 1 , "cool");
// console.log(p1); console.log(p2); console.log(p3);


// -------------------------------------------

let obj = {
    a: 10
}

function Objj(){
    this.a = 50
}

let obj2 = new Objj()


console.log(obj);
console.log(obj2);
