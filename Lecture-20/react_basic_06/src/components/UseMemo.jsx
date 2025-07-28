import { useMemo, useState } from "react";

function UseMemo(){
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);
    function handleChange(e){
        setInp(e.target.value)
    }
    let finalAns = useMemo(function(){
        let ans = 0;
        for(let i = 1;i<=inp;i++){
            console.log("loop ran");
            ans+=i;
        }
        return ans;
    }, [inp])
    
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Count: {count}</button>
            <h1>Sum: {finalAns} </h1>
            <input onChange={handleChange} type="number" value={inp} /> 
            {/* 1 till that num */}
        </div>
    )
}
export default UseMemo;







// -------------------------------------------------

// import { useState } from "react";

// function UseMemo(){
//     const [val,setVal] = useState(0);

//     function handleInput(event){
//         setVal(event.target.value)
//     }
//     return(
//         <div>
//             <h1>USEMEMO:</h1>
//             <input onChange={handleInput} type="text" value={val} />
//         </div>
//     )
// }
// export default UseMemo;