const router = require('express').Router();
const bodymen = require('bodymen');
const querymen = require('querymen');
const { registerCtrl } = require('./controller.js');
router.post('/',
    bodymen.middleware({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }),
    registerCtrl
)   

// router.get('/', (req, res)=> console.log("req"))

module.exports = router;