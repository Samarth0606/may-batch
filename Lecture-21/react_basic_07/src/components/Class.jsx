import { useEffect } from "react";
import { useState } from "react";

function ClassLifeCycle(){
    const [count,setCount] = useState(0);

    useEffect(function(){
        if(count === 0){
            console.log("Component Did mount");
        }
        else if(count>0 && count <=5){
            console.log("Component Did update");
        }
        if(count>5){
            return ()=>{
                console.log("Component Will Unmount"); 
            }
        }
    },[count])

    return(
        <div>
            <h1 onClick={()=>setCount(count+1)} >Count: {count}</h1>
        </div>
    )
}

export default ClassLifeCycle;