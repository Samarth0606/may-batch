import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {
    let [count,setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
    return(
        <div>
           <CountRendered />
           <Button setCount={setCount}/>
        </div>
    )
}
function Button({setCount}){
    let count = useContext(CountContext);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}
function CountRendered(){
    let count = useContext(CountContext)
    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default PropDrilling