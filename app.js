require('dotenv').config();

const express = require('express');

const path = require('path');
const cookieParser = require("cookie-parser");

const db = require('./config/mongoose-connection');

const userRouter = require('./routes/userRouter');
const gameRouter = require('./routes/gameRouter');

const env = process.env.ENVIRONMENT || 'development';
const debug = require('debug');
const dbgr = debug(`${env}:app`);

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', userRouter);
app.use('/game', gameRouter);

const uri = process.env.URI || 'http://localhost';
const port = process.env.PORT || 3000;

const url = `${uri}:${port}`;

app.listen(port, function(error) {
    dbgr(`Server started on ${url}`);
    if (error)(dbgr(error));
});
