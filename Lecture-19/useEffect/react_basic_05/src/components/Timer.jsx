import { useEffect, useState } from "react";

function Timer(){
    const [time,setTime] =useState(0);

    useEffect(function(){
        setInterval(function(){
            setTime(time+1)
        } , 1000)
    } , [time])

    return(
        <div>
            {/* <h1>Time: {time}</h1> */}
        </div>
    )
}

export default Timer;