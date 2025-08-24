// logics of API
const RestaurantModel = require("../models/Restaurant.model")
async function fetchRestaurant(req,res){
    try{
        let data = await RestaurantModel.find() //returns a promise
        if(!data){
            return res.status(404).json({message: "Restaurants are not found"})
        }
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

async function createRestaurant(req,res){
    try{
        // console.log(req.body);
        let newRestaurant = await RestaurantModel.create(req.body) //promsie
        res.status(201).json(newRestaurant)
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

module.exports = {fetchRestaurant , createRestaurant}