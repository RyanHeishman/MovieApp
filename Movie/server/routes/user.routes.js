const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    
    app.get('/api/loggedInUser/:id', UserController.getLoggedInUser)
    app.post('/api/registerUser', UserController.registerUser)
    app.post('/api/loginUser', UserController.loginUser)
    app.post('/api/logoutUser', UserController.logoutUser)
    app.get('/api/users', UserController.getAllUsers)
    app.delete('/api/deleteUser/:id', UserController.deleteUser)

}