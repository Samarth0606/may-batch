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

async function updateRestaurant(req,res){
    try{
        let {id} =  req.params;
        // updateOne( {},{ $set: {} } ) //shell command
        let updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, {new:true})
        return res.status(200).json(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

async function deleteRestaurant(req,res){
    try{
        let {id} =  req.params;
        let deletedRestaurant = await RestaurantModel.findByIdAndDelete(id)
        return res.status(200).json(deletedRestaurant)
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

module.exports = {fetchRestaurant , createRestaurant, updateRestaurant, deleteRestaurant}