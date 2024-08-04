const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {});

router.post('/login', (req, res) => {});

router.get('/signup', (req, res) => {});

router.post('/signup', (req, res) => {});

router.post('/logout', (req, res) => {});


module.exports = router;
