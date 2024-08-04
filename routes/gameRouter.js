const express = require('express');

const router = express.Router();

router.get('/:game_id', (req, res) => {
    res.send('Welcome to the game page!');
})

module.exports = router;
