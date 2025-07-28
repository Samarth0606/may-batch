import { memo, useCallback, useState } from "react";

function Callback(){
    // let a = function(){console.log("hello")};
    let a = useCallback(function(){console.log("hello")}, [])

    const [count,setCount] = useState(0);
    return(
        <div>
            <Chotu propss={a} />
            <button onClick={()=>setCount(count+1)} >Counter: {count}</button>
        </div>
    )
}

const Chotu = memo(function({propss}){
    return(
        <div>
            <h1>Hello : {propss()} </h1>
        </div>
    )
})



export default Callback