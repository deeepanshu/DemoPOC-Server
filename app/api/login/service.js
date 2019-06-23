const { serviceResponse } =  require("../../services/utils");
const { firebase, firebaseAdmin } = require('../../services/firebase');

const register = async (params) => {
    try {
        
        let email = params.username;
        let password = params.password;
        // let auth = firebase.auth();
        firebaseAdmin.auth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            displayName: 'John Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false
        })
            .then(function (userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
            })
            .catch(function (error) {
                console.log('Error creating new user:', error);
            });
        return serviceResponse({
            res: params
        })
    } catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

const login = async (params) => {
    try {
        let email = params.username;
        let password = params.password;
        // let auth = firebase.auth();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => console.log(res))
            .catch((err) => {
                let errorCode = err.code;
                let errorMessage = err.message;
                if (err) throw err;
            })
    }catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

const deleteUser = async (params) => {
    try {
        let uid = params.uid;
        if (!uid) throw "Cannot find user!";
        firebaseAdmin.auth().deleteUser(uid)
            .then(res => {
                console.log(res)
                return serviceResponse({res})
            })
            .catch(err => {throw err});

    } catch (err) {
        console.log(err);
        return serviceResponse({
            err
        })
    }
}

module.exports.register = register;
module.exports.login = login;
module.exports.deleteUser = deleteUser;