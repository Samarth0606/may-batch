const { fetchRestaurant, createRestaurant, updateRestaurant,deleteRestaurant } = require("../controllers/restaurant.controller");
const verifyToken = require("../middleware/verifyToken");



function restaurantRoutes(app){
    app.get('/api/restaurants' , fetchRestaurant)
    app.post('/api/restaurant', verifyToken , createRestaurant)
    app.patch('/api/restaurant/:id' , verifyToken , updateRestaurant)
    app.delete('/api/restaurant/:id' , verifyToken , deleteRestaurant)
}

module.exports = restaurantRoutes;





