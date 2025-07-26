import { useState } from "react"

function Namaste({naam}){

    const [username,setUsername] = useState(naam)

    function handleClick(){
        setUsername("Anonymous")
    }

    return(
        <div>
            <h1>name: {username}</h1>
            <button onClick={handleClick} >logout</button>
        </div>
    )
}

export default Namaste

// ----------------------------------------------------

// function Namaste({naam}){
//     let myname = naam;
//     function handleClick(){
//         console.log(myname , "before");
//         myname = "anonymous"
//         console.log(myname , "after");
//     }

//     return(
//         <div>
//             <h1>name: {myname}</h1>
//             <button onClick={handleClick} >logout</button>
//         </div>
//     )
// }

// export default Namaste