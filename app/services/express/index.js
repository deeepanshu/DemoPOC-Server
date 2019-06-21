const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { queryErrorHandler, bodyErrorHandler } = require('../errorHandlers');

module.exports = (apiRoot, routes) => {
    const app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    console.log(apiRoot);
    app.use(apiRoot, routes)
    app.use(queryErrorHandler())
    app.use(bodyErrorHandler())
    return app;
}