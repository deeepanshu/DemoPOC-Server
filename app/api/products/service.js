const { serviceResponse } = require("../../services/utils");
const { firebase, firebaseAdmin } = require('../../services/firebase');
let db = firebase.firestore();
const addProduct = async (params) => {

    try {
       
        db.collection('products').doc().set({
            title: params.title,
            description: params.description
        })
        .catch(err => {throw err});
        return serviceResponse({
            res: {
                title: params.title,
                description: params.description
            }
        })
    } catch (err)  {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

const deleteProduct = async (query, select, cursor) => {
    try{
        db.collection('products').doc(query.uid).delete()
            .then(res => {return serviceResponse({
                res
            })})
            .catch(err => {throw err;})
    } catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

const updateProduct = async (params) => {
    try {
        db.collection('products').doc(params.uid).set({
            title: params.title,
            description: params.description
        })

    } catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

const getProduct = async (query, select, cursor) => {
    try {
        const data = await db.collection('products').get();
        if (!data.empty) {
            return serviceResponse({
                res: data.docs.map(doc => {
                    return {
                        uid: doc.id,
                        ...doc.data()
                    }
                })
            })
        }
        return serviceResponse({    
            res: null
        })
    } catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProduct = getProduct;