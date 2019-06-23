const router = require('express').Router();
const bodymen = require('bodymen');
const querymen = require('querymen');
const { registerCtrl, loginCtrl, deleteUserCtrl } = require('./controller.js');

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

router.post("/login", bodymen.middleware({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}),
    loginCtrl
)

router.delete("/", bodymen.middleware({
    uid: {
        type: String,
        required: true
    }
}),
    deleteUserCtrl
)

// router.get('/', (req, res)=> console.log("req"))

module.exports = router;