const  mogoose  = require('mongoose');

const db = mogoose.connection;

module.exports.db = db;