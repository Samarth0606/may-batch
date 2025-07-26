function ChangePerson({naam}){

    function handleName(a,b){
        console.log("welcome to click" , a , b); 
    }

    return(
        <div>
            <h1>NAME: {naam}</h1>
            <button onClick={handleName} > Logout </button> 
            <button onClick={()=> handleName("sam" , "vohra")} > Logout </button> 
        </div>
    )
}

export default ChangePerson;