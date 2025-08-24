const { fetchRestaurant, createRestaurant } = require("../controllers/restaurant.controller");



function restaurantRoutes(app){
    app.get('/api/restaurants' , fetchRestaurant)
    app.post('/api/restaurant' , createRestaurant)
}

module.exports = restaurantRoutes;





