const { fetchRestaurant, createRestaurant, updateRestaurant,deleteRestaurant } = require("../controllers/restaurant.controller");



function restaurantRoutes(app){
    app.get('/api/restaurants' , fetchRestaurant)
    app.post('/api/restaurant' , createRestaurant)
    app.patch('/api/restaurant/:id' , updateRestaurant)
    app.delete('/api/restaurant/:id' , deleteRestaurant)
}

module.exports = restaurantRoutes;





