import { useEffect, useState } from "react";

function Timer(){
    const [time,setTime] = useState(0);
    // let [name,setName] = useState("sam")

    useEffect(function(){
        let idd = setInterval(function(){
            setTime(time+1)
        } , 1000)
        // cleanup fn
        return ()=>{
            clearInterval(idd)
        }
    } , [time])
    
    return(
        <div>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Timer;