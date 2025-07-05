

// async function sam(){
//     console.log(10);
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos') //api calling -> returns a promise
//     console.log(resp);
//     console.log(20);
//     console.log(30); 
// }

// console.log(100);
// sam();
// console.log(200);


// ----------------------------------


// async function sam(){
//     console.log(10);
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
//     console.log(resp , "api1");
//     console.log(20);
//     console.log(30); 
// }

// console.log(100);
// sam();
// console.log(200);

// async function sam2(){
//     console.log(1);
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos/2') 
//     console.log(resp , "api2");
//     console.log(2);
//     console.log(3); 
// }

// console.log(10000);
// sam2();
// console.log(20000);

// ----------------------------------

async function sam(){
    console.log(10);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/2') 
    let data = await resp.json()
    console.log(data , "api1");
    console.log(20);
    console.log(30); 
}

console.log(100);
sam();
console.log(200);

async function sam2(){
    console.log(1);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/2') 
    let data = await resp.json()
    console.log(data , "api2");
    console.log(2);
    console.log(3); 
}

console.log(10000);
sam2();
console.log(20000);




