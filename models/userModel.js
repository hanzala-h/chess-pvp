const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Number,
        default: 0
    },
    bio: {
        type: String,
        default: "Strategist in the making—let's play a game!"
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'game'
    }],
    rating: {
        type: Number,
        default: 400
    }
});

module.exports = mongoose.model('user', schema);
