import { useEffect, useRef } from "react";

function Ref(){
    let salary = 400000;
    let spanEl = useRef()
    // console.log(spanEl.current,"spanEl");

    useEffect(function(){
        setTimeout(function(){
           spanEl.current.innerHTML = "200";
        } , 3000)
    } , [])

    return(
        <div>
            <h1>Salary: <span ref={spanEl}> {salary} </span> </h1>
        </div>
    )
}

export default Ref

// ----------------------------------------------

// import { useEffect } from "react";

// function Ref(){
//     let salary = 400000;

//     useEffect(function(){
//         setTimeout(function(){
//             document.getElementById("salary").innerHTML = "200";
//         } , 3000)
//     } , [])

//     return(
//         <div>
//             <h1>Salary: <span id="salary"> {salary} </span> </h1>
//         </div>
//     )
// }

// export default Ref