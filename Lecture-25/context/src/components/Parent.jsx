function Parent(){
    function handleData(d){
        console.log(d , "children prop");
    }

    return(
        <div>
            <Children handleData={handleData} />
        </div>
    )
}


function Children({handleData}){
    let data = "Say No to dog shelters";
    return(
        <div>
            <button onClick={()=>handleData(data)} >Share data</button>
        </div>
    )
}


export default Parent;