const express = require('express');

const router = express.Router();

const isAuthenticated  = require('../middlewares/authMiddleware');

const {render} = require('../utils/render');

router.get('/', isAuthenticated, (req, res) => {
    render(res, 'index', 'Home');
});

router.get('/login', (req, res) => {
    render(res, 'login', 'Login');
});

router.post('/login', (req, res) => {});

router.get('/signup', (req, res) => {});

router.post('/signup', (req, res) => {});

router.post('/logout', isAuthenticated, (req, res) => {});


module.exports = router;
