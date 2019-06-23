const { success } = require('./../../services/utils');
const { addProduct } = require('./service');

const addProductCtrl = async ({
    bodymen: {
        body
    }
}, res, next) => {
    addProduct(body)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

module.exports.addProductCtrl = addProductCtrl;