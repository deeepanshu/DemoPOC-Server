const { serviceResponse } = require("../../services/utils");
const { firebase, firebaseAdmin } = require('../../services/firebase');
// let database = firebase.database();
let db = firebase.firestore();
const addProduct = async (params) => {

    try {

        // database.ref('products/').set({
        //     title: params.title,
        //     description: params.description
        // })
       
        db.collection('products').doc().set({
            title: params.title,
            description: params.description
        }).then(res => console.log(res))
        .catch(err => console.log(err));

    } catch (err)  {
        throw err;
    }
}

module.exports.addProduct = addProduct;