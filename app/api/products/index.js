const router = require('express').Router();
const bodymen = require('bodymen');
const querymen = require('querymen');
const { addProductCtrl, deleteProductCtrl, updateProductCtrl, getProductCtrl } = require('./controller');

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

router.put('/', bodymen.middleware({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}),
    updateProductCtrl
)

router.delete('/', querymen.middleware({
    uid: {
        type: String,
        bindTo: 'query'
    }
}),
    deleteProductCtrl
)

router.get('/', querymen.middleware({
    skipPage: {
        type: Number,
        bindTo: 'cursor'
    },
    limitPage: {
        type: Number,
        bindTo: 'cursor'
    },
    sortProp: {
        type: String,
        bindTo: 'cursor'
    },
    sortDir: {
        type: String,
        bindTo: 'cursor'
    }
}),
    getProductCtrl
)



module.exports = router;