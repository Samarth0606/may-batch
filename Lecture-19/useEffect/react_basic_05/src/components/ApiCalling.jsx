import { useEffect, useState } from "react";
import axios from "axios";

function ApiCalling(){

    const [todos,setTodos] = useState([]);

    useEffect(function(){
        const API = "https://jsonplaceholder.typicode.com/todos"
        
        async function calling(){
            const dataa = await axios.get(API)
            console.log(dataa.data , "data");
            setTodos(dataa.data);
        }
        calling()

    } , [])
    

    return(
        <div>
            <h1>API fetching</h1>
        </div>
    )
}

export default ApiCalling;

// ------------------------------------------------------------
// ##FETCH

// import { useEffect, useState } from "react";

// function ApiCalling(){

//     const [todos,setTodos] = useState([]);

//     // executes once only
//     useEffect(function(){
//         const API = "https://jsonplaceholder.typicode.com/todos"
//         fetch(API)
//         .then(function(data){
//             return data.json()
//         })
//         .then(function(resp){
//             console.log(resp , "resp");
//             setTodos(resp)
//         })
//     } , [])
    

//     return(
//         <div>
//             <h1>API fetching</h1>
//         </div>
//     )
// }

// export default ApiCalling;