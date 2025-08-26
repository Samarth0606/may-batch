const { register, login } = require("../controllers/user.controller");



function userRoutes(app){
    app.post('/api/register' , register)
    app.post('/api/login' , login)
}

module.exports = userRoutes;





