
// const API = "https://jsonplaceholder.typicode.com/todos";
// FETCH AND PROMISE

//returns a promise
// fetch(API)        
// .then((d)=>{
//     return d.json() //retunrs a promise
// })
// .then((resp)=>{ 
//     console.log(resp , "resp") 
// })
// .catch((e)=>{
//     console.log(e , "catch");
// })

// --------------------------------------------

// FETCH AND  async-await
// const API = "https://jsonplaceholder.typicode.com/todos";

// async function calling(){
//     const data = await fetch(API);
//     const response = await data.json();
//     console.log(response);
// }

// calling()

// --------------------------------------------

const API = "https://jsonplaceholder.typicode.com/todos";

// axios with promise

axios.get(API) //it will give me entire data
.then((resp)=>{
    console.log(resp.data , "entire data");
})
.catch((err)=>{
    console.log(err);
})

// --------------------------------------------

// axios with async await
async function calling(){
    try{
        const resp = await axios.get(API);
        console.log(resp.data);
    }
    catch(err){
        console.log(err);  
    }
}
calling()