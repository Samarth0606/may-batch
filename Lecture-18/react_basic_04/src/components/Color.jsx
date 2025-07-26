import React, { Fragment, useState } from "react"

function Color(){
    const [color,setColor] = useState("red");
    function handleRed(){
        setColor("red")
    }
    function handleBlue(){
        setColor("blue")
    }
    function handleGreen(){
        setColor("green")
    }

    return(
        <Fragment>
            <div style={{backgroundColor: color}}>
                <h1> Color: {color} </h1>
                <button onClick={handleRed}>Red</button>
                <button onClick={handleBlue}>Blue</button>
                <button onClick={handleGreen}>Green</button>
            </div>
        </Fragment>
    )
}
export default Color