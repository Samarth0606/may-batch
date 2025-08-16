function Search({restArr,setAllRestArr}){

    function handleRestSearch(searchedText){
        console.log(searchedText , "searchedText");
        let searchedRest = restArr.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        setAllRestArr(searchedRest)
    }

    return(
        <input onChange={(e)=>handleRestSearch(e.target.value)} className="border" placeholder="Search here..."  />
    )
}

export default Search;