const mongoose = require('mongoose');

const schema = mongoose.Schema({
    game_id: Number,
    white: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    black: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    white_points: {
        type: Number,
        default: 0
    },
    black_points: {
        type: Number,
        default: 0
    },
    result: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('game', schema);
