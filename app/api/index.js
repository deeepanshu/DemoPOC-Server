const router = require('express').Router();
const login = require('./login');
const product = require('./products');
router.use('/auth',login);
router.use('/product', product);

module.exports = router;