import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";

function Body(){

    let restArr = ApiCalling();

    return(
        <div className="mt-30">
            <h1 className="font-bold text-xl mx-10 my-5">Restaurants with online food delivery in Chhindwara</h1>
            <button className="border text-lg rounded-2xl w-1/12 ml-14">Rating 4.5+</button>
            <button className="border text-lg rounded-2xl w-1/12 ml-8">Reset</button>
            <div className="flex flex-wrap w-10/12 mx-auto">
                <RestaurantCard restArr={restArr} />
            </div>
        </div>
    )
}
// api->https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1

export default Body;