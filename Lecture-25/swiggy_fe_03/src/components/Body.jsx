import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function Body(){

    let restArr = ApiCalling(); //time consuming
    const [allRestArray,setAllRestArr] = useState(restArr);
    const [isClicked1,setIsClicked1] = useState(false);
    const [isClicked2,setIsClicked2] = useState(false);

    useEffect(()=>{
        if(restArr && restArr.length){
            setAllRestArr(restArr)
        }
    }, [restArr])

    function filterTopRatedRest(restArr){
        let ratingFilter = restArr.filter((restaurant)=> restaurant.info.avgRating >= 4.5 )
        setAllRestArr(ratingFilter)
        setIsClicked2(false)
        setIsClicked1(true)
    }
    function resetFilter(restArr){
        setAllRestArr(restArr)
        setIsClicked2(true)
        setIsClicked1(false)
    }

    return(
        <div className="mt-30">
            <h1 className="font-bold text-xl mx-10 my-5">Restaurants with online food delivery in Chhindwara</h1>
                <button onClick={()=>filterTopRatedRest(restArr)} className={isClicked1? "border text-lg rounded-2xl w-1/12 ml-14 bg-amber-200" : "border text-lg rounded-2xl w-1/12 ml-14"}>Rating 4.5+</button>
                <button onClick={()=>resetFilter(restArr)} className={isClicked2? "border text-lg rounded-2xl w-1/12 ml-14 bg-amber-200" : "border text-lg rounded-2xl w-1/12 ml-14"}>Reset</button>
                
                <div className="mx-10 flex justify-center">
                    <Search restArr={restArr} setAllRestArr={setAllRestArr} />
                </div>
            
            <div className="flex flex-wrap w-10/12 mx-auto">
                <RestaurantCard restArr={allRestArray} />
            </div>
        </div>
    )
}
// api->https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1

export default Body;