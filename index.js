require('dotenv').config();
const express = require('./app/services/express');
const http = require('http');
const routes = require('./app/api');
const app = express(process.env.APIROOT, routes);
const mongoose = require('./app/services/mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

const server = http.createServer(app);

setImmediate(() => {
    server.listen(process.env.PORT, process.env.IP, () => {
        console.log('Express server listening on http://%s:%d', process.env.IP, process.env.PORT);
    })
})