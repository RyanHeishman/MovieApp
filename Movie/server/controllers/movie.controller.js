const Movie = require('../models/movie.model')


module.exports = {
    
    index: (request, response) => {
        response.json({
           message: "Hello World"
        });
    },

    findAllMovies: (req, res) => {
        Movie.find({})
            .then((movies) => {
                res.status(200).json(movies)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },

    createMovie: (req, res) => {
        Movie.create(req.body)
        .then(movie => res.status(201).json(movie))
        .catch(err => res.status(500).json(err));
    },

    findOneMovie: (req, res) => {
        const id = req.params.id
        Movie.findById(id)
        .then(movie => res.status(200).json(movie))
        .catch(err => res.status(500).json(err));
    },

    deleteMovie: (req, res) => {
        const id = req.params.id
        Movie.deleteOne({_id: id})
        .then(movie => res.status(204).json(movie))
        .catch(err => res.status(500).json(err))
    },

    updateMovie: (req, res) => {
        const id = req.params.id
        Movie.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedMovie => res.status(201).json(updatedMovie))
        .catch(err => res.status(500).json(err))

    }
}