import { useEffect, useState } from "react";
import axios from 'axios';

function ApiCalling(){
    const [allRestaurantArr,setAllRestaurantArr] = useState([]);

    useEffect(()=>{
        async function calling(){
            const API="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
            const resp = await axios.get(API)
            // console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurantArr(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    },[])
    return allRestaurantArr;

}

export default ApiCalling;