import { useState } from "react";

function Counter(){

    const [count,setCount] = useState(0);
    function handleDec(){
        setCount(count - 1) 
 
        setCount((d)=>d - 2) 

        setCount((f)=>f - 3) 
    }

    function handleInc(){
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
    return(
        <div>
            <button onClick={()=>handleDec()}> - </button>

            <h1>Count: {count}</h1>

            <button onClick={()=>handleInc()}> + </button>
        </div>
    )
}

export default Counter;

// --------------------------------------------------------

// import { useState } from "react";

// function Counter(){

//     const [count,setCount] = useState(0);
//     function handleDec(){
//         console.log(count , "1"); // 0
//         setCount((c)=>c-1) // remember the prev state
//         console.log(count , "2"); // 0
//         setCount((c)=>c-1)
//         console.log(count , "3"); // 0 
//         setCount((c)=>c-1) // -3
//         console.log(count , "4"); // 0
//     }

//     function handleInc(){
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <button onClick={()=>handleDec()}> - </button>

//             <h1>Count: {count}</h1>

//             <button onClick={()=>handleInc()}> + </button>
//         </div>
//     )
// }

// export default Counter;

// --------------------------------------

// import { useState } from "react";

// function Counter(){

//     const [count,setCount] = useState(0);
//     function handleDec(){
//         console.log(count , "1"); // 0
//         setCount(count-1) //immidiately ❌ take time ✅ 0-1 = -1
//         console.log(count , "2"); // 0
//         setCount(count-1) //async later on 0-1 = -1
//         console.log(count , "3"); // 0 
//         setCount(count-1) //async later on 0-1 = -1
//         console.log(count , "4"); // 0
//     }

//     function handleInc(){
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <button onClick={()=>handleDec()}> - </button>

//             <h1>Count: {count}</h1>

//             <button onClick={()=>handleInc()}> + </button>
//         </div>
//     )
// }

// export default Counter;