import { useEffect, useState } from "react";

function Effects(){

    const [val,setVal] = useState(100);
    const [clock,setClock] = useState(0);

    console.log("hello 1");
    // case 1
    // useEffect(function(){
    //     console.log("hello from useEffect");
    // } , [])
    // case 2
    useEffect(function(){
        console.log("hello from useEffect");
    } , [val,clock])
    // case 3
    // useEffect(function(){
    //     console.log("hello from useEffect");
    // } )
    
    console.log("hello 2");
    

    return(
        <div>
            <h1 onClick={()=>setClock(clock+1)} >Effects</h1>
            {/* <button onClick={()=>handleclick()} >click</button> */}
            <button onClick={()=>setVal(val+10)} >click: {val}</button>
        </div>
    )
}

export default Effects