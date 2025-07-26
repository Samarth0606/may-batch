import { useState } from "react";

function New(){
    // let naam = "Chandan"
    const [naam,setNaam] = useState("Chandan")
    const [count,setCount] = useState(10);
    function handleBtn(){
        setCount(count*5)
    }
    function handleNaam(){
       setNaam("anonymous")
    }
    return(
        <div>
            <h1 onClick={handleNaam} >Name:{naam} </h1>
            <button onClick={handleBtn} >Click me: {count}</button>
        </div>
    )
}

export default New;