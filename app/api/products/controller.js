const { success } = require('./../../services/utils');
const { addProduct, deleteProduct, getProduct, updateProduct } = require('./service');

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

const deleteProductCtrl = async ({
    querymen: {
        query,
        select,
        cursor
    }, params }, res, next) =>{
    deleteProduct(query, select, cursor)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

const getProductCtrl = async ({
    querymen: {
        query,
        select,
        cursor
    }, params }, res, next) => {
    getProduct(query, select, cursor)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

const updateProductCtrl = async ({
    bodymen: {
        body
    }
}, res, next) => {
    updateProduct(body)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

module.exports = {
    addProductCtrl,
    deleteProductCtrl,
    getProductCtrl,
    updateProductCtrl
}
