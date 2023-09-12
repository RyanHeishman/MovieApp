const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

const MovieSchema = new mongoose.Schema({
    
    title: {type: String,
    required: [true, 'You must add a title'],
    minLength: [1, 'Title must be at least 1 character']
    },
    genre: {type: String,
        required: [true, 'You must add a genre type'],
    },
    director: {type: String,
        required: [true, 'You must add a director'],
        minLength: [3, "The director's name must be at least 3 characters"]
    },
    releaseYear: {type: Number,
        required: [true, 'You must add a release year'],
        min: [1896, 'The year must be at least past 1896']
    },
    duration: {type: Number,
        required: [true, 'You must add a duration'],
        min: [15, 'Duration must be at least 15 minutes']
    },
    rating: {type: String,
        required: [true, 'You must add a rating'],
    },
    poster: {type: String,
        required: [true, 'You must add an image link'],
    },
    description: {type: String,
        required: [true, 'You must add a description'],
        minLength: [30, "The description must be at least 30 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema);