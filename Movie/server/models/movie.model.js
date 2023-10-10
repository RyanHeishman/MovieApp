const mongoose = require("mongoose");
// const { object } = require("webidl-conversions");

const MovieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    movId: {
        type: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema);