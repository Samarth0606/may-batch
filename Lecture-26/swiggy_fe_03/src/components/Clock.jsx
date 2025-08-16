import React, { useEffect, useState } from 'react'

function Clock() {

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        let idd = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
        return ()=> clearInterval(idd)
    },[])

  return (
    <div>
        Time: {time}
    </div>
  )
}

export default Clock