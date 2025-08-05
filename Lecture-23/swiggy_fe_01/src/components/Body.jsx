import RestaurantCard from "./RestaurantCard";

function Body(){
    return(
        <div>
            <h1 className="font-bold text-xl mx-10 my-5">Restaurants with online food delivery in Chhindwara</h1>
            <button className="border text-lg rounded-2xl w-1/12 ml-14">Rating 4.5+</button>
            <button className="border text-lg rounded-2xl w-1/12 ml-8">Reset</button>
            <div className="flex flex-wrap w-10/12 mx-auto">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

export default Body;