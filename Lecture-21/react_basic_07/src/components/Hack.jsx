function Hack(){
    function handleClick(d){
        console.log(d , "data from child");
    }
    return(
        <div>
            <h1> Parent </h1>
            <Child handleClickKey={handleClick} />
        </div>
    )
}

function Child({handleClickKey}){
    let data = "I am sam"
    return(
        <div>
            <h1 onClick={()=> handleClickKey(data)} > Child </h1>

        </div>
    )
}

export default Hack