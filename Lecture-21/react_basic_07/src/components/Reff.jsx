import { useRef, useState } from "react";

function Reff(){
    const [count,setCount] = useState(0);
    const countRef = useRef(0);
    function handleRef(){
        countRef.current++
    }
    return(
        <div>
            <button onClick={handleRef} >Counter Ref: {countRef.current} </button>

            <button onClick={()=>setCount(count+1)} >Counter: {count}</button>
        </div>
    )
}

export default Reff;