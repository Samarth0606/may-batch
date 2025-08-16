import { Link } from "react-router-dom";

function RestaurantCard({restArr}){

    return(
        restArr.map((restDetails)=>{
            return(
                <Link to={`/restaurant/${restDetails.info.id}`} >
                    <div className="m-8 w-58">
                        <img className="w-58 h-42 rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetails.info.cloudinaryImageId}`} alt="" />
                        <div className="m-2">
                            <h1 className="font-bold">{restDetails.info.name} </h1>
                            <span className="font-bold">{restDetails.info.avgRating}</span>
                            <span className="mx-4 font-bold">{restDetails.info.sla.slaString}</span>
                            <p>{restDetails.info.cuisines[0]}</p>
                            <p>{restDetails.info.locality}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default RestaurantCard;