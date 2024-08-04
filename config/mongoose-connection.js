const mongoose = require('mongoose');

const env = process.env.ENVIRONMENT || 'development';
const debug = require('debug');
const dbgr = debug(`${env}:mongodb`);

const uri = `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`;

mongoose.connect(uri)
    .then(() => {
        dbgr(`Connected to ${uri} successfully!`);
    })
    .catch((err) => {
        console.error(err.message);
    });

module.exports = mongoose.connection;
