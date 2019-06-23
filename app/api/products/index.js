const router = require('express').Router();
const bodymen = require('bodymen');
const querymen = require('querymen');
const { addProductCtrl} = require('./controller');

router.post('/', bodymen.middleware({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}),
    addProductCtrl
)

module.exports = router;