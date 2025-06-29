
// 1. direct functional calling -> window object

// function samarth(){
//     console.log(this);  //window
// }

// samarth();

// -------------------------

// 2. object calling -> points to the object inside which the fn with this keyword is present
// let obj = {
//     a: 10,
//     b:20,
//     fn:function(){
//         console.log(this); //obj
//     }
// }

// obj.fn();

// -------------------------

// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this); // window
//     }
// }

// let ans = obj.fn;
// ans()

// ------

// let obj2 = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this); // obj2
//     }
// }

// obj2.fn();


// -------------------------

// let obj2 = {
//     a: 100,
//     b: 200,
//     fn: function(){
//         console.log(this , "1"); // obj2
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//     }
// }
// obj2.fn();


// let obj2 = {
//     a: 100,
//     b: 200,
//     fn: function(){
//         console.log(this , "1"); // window
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//     }
// }
// let ans = obj2.fn;
// ans()

// ----------------------------------

// let obj2 = {
//     a: 100,
//     b: 200,
//     abc:{
//         fn: function(){
//             console.log(this , "1"); // abc
//             function sam(){
//                 console.log(this , "2"); // window
//             }
//             sam()
//         }
//     }
// }
// obj2.abc.fn();


// ----------------------------------
// 3. constructor calling -> newly created object

// function Sam(){
//     this.a = "samarth"
//     this.b = "vohra"
// }

// let p1 = new Sam()

// let p2 = new Sam()


// ----------------------------------
// 4. indirect calling -> call apply bind

let obj1 = { 
    a: 10 , 
    fn:function(x,y){ 
        console.log(this.a, x, y) 
    }
}

let obj2 = { 
    a: 50
}

obj1.fn();

obj1.fn.call(obj2,100,200);  //1st argument as the new this keyword
obj1.fn.apply(obj2,[1000,2000]); //1st argument as the new this keyword

let newFn = obj1.fn.bind(obj2,100,200); // create a copy of that fn
newFn();



// ----------------------------------

// 5. ARROW FN CALLING - depends on parent's this


// let obj = {
//     a: 100,
//     fn: ()=>{
//         console.log(this); // window
//         function abc(){
//             console.log(this); // window
//         }
//         abc()
//     }
// }
// obj.fn();

// ------------------

// let obj = {
//     a: 100,
//     fn: ()=>{
//         console.log(this); // window
//         function abc(){
//             console.log(this); // window
//         }
//         abc()
//     }
// }
// let ans = obj.fn;
// ans()

// ----------------------

// let obj = {
//     a: 100,
//     fn: ()=>{
//         console.log(this); //window
//         const abc = ()=>{
//             console.log(this); //window
//         }
//         abc()
//     }
// }
// obj.fn();


// let obj = {
//     a: 100,
//     fn: function(){
//         console.log(this); // obj
//         const abc = ()=>{
//             console.log(this); // obj
//         }
//         abc()
//     }
// }
// obj.fn();


// let obj = {
//     a: 100,
//     fn: function(){
//         console.log(this); // window
//         const abc = ()=>{
//             console.log(this); // window
//         }
//         abc()
//     }
// }
// let ans = obj.fn;
// ans()



// function sum(a,b){
//     return a+b
// }

// console.log( sum(10,45) );

// ------------------
// way-1

// const sum = (a,b)=>{
//     return a+b
// }

// console.log( sum(10,45) );

// ------------------

// function sqr(a){
//     return a*a;
// }
// console.log( sqr(5) );

// ----------------- way-1 ----------------------
// const sqr = (a)=>{
//     return a*a
// }
// console.log( sqr(5) );

// ----------------- way-2 ----------------------
// const sqr = (a)=> a*a

// console.log( sqr(5) );

// ----------------- way-3 ----------------------
// const sqr = a => a*a

// console.log( sqr(5) );
