
// let arr = [10,20,30,40,50]

// forEach() -> accepts a cb fn , has 2 args(item,index), doesnot returns anything

// arr.forEach()
// arr.forEach( function(){} )
// arr.forEach( function(itm, idx){} )

// let returnedVal = arr.forEach( function(item,index){
//     console.log(item , index);
//     // return item 
// } )
// console.log(returnedVal);

// looping (usage)


// ----------------------------------------------


// map() -> accepts cb fn, has 2 args (item,index), returns new array with same length

let arr = [10,20,30,40,50]
let newArr = arr.map( function(item,index){
    console.log(item*item)
    // return item*item
} )

console.log(arr);
console.log(newArr);







