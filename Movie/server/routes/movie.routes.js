const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/api', MovieController.index);

    app.get('/api/movie', MovieController.findAllMovies)
    app.get('/api/movie/:id', MovieController.findOneMovie)
    app.put('/api/updateMovie/:id', MovieController.updateMovie)
    app.post('/api/movie', MovieController.createMovie)
    app.delete('/api/deleteMovie/:id', MovieController.deleteMovie)
}

