
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connection.on('open', () => {
    console.log("Mongo Connected!")
})
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err)
    process.exit(-1)
})

module.exports = mongoose;
