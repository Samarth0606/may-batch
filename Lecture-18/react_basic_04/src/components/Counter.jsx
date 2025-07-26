import { useState } from "react";

function Counter(){

    const [count,setCount] = useState(0);
    
    function handleDec(){
        setCount(count-1)
    }
    function handleInc(){
        setCount(count+1)
    }

    return(
        <div>
            <button onClick={handleDec} >-</button>
            <h1>Count: {count} </h1>
            <button onClick={()=>handleInc()} >+</button>
        </div>
    )
}
export default Counter;