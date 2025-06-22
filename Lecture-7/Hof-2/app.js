
// forEach() 

// let arr = [10,20,30,40,50]

// arr.forEach( function( item,index ){} )

// arr.forEach( function( item,index ){
//     console.log(item+index);
// } )

// -----------------------------------------

// Map()

// let arr = [10,20,30,40,50]

// let newArr = arr.map( function( item,index ){
//     return item*item;
// } )

// console.log(arr);
// console.log(newArr);


// -----------------------------------------

// Filter() -> length is not fixed

// let arr = [10,20,33,44,50]

// let newArr = arr.filter( function( item,index ){
//     if(item%10 === 0) {return true}
// } )

// console.log(arr);
// console.log(newArr);


// -----------------------------------------

// find() 

// let arr = [10,20,33,44,50]

// let ele = 50;

// let foundeElement = arr.find( function( item,index ){
//     if(item === ele){return true}
// } )

// console.log(foundeElement);



// -----------------------------------------

// some (anyone satisfies the criteria)

// let arr = [10,20,33,44,50]

// let decision = arr.some( function( item,index ){
//     if(item%10 === 0) return true
// } )

// console.log(decision);


// -----------------------------------------

// every (every satisfies the criteria)

// let arr = [10,20,30,40,50]

// let decision = arr.every( function( item,inde ){
//     console.log("hello");
//     if(item%10 === 0) return true
// } )
// console.log(decision);


// -----------------------------------------

let arr = [10,20,[ 100,200, [4000,5000],500], 50];
console.log(arr);

console.log( arr.flat() );


