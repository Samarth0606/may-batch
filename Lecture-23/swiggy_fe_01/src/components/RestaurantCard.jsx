function RestaurantCard(){
    return(
        <div className="m-8">
            <img className="w-58 h-42 rounded-2xl" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG" alt="" />
            <div className="m-2">
                <h1 className="font-bold">PIZZA HUT</h1>
                <span className="font-bold">4.3</span>
                <span className="mx-4 font-bold">40-45 mins</span>
                <p>Pizza's</p>
                <p>Pasaria Road</p>
            </div>
        </div>
    )
}

export default RestaurantCard;