var admin = require('firebase-admin');

const serviceAccount = require("./../../../keys/serviceAccount.json");

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firepoc-2f826.firebaseio.com"
});

var firebase = require("firebase");

// Add the Firebase products that you want to use

// require("firebase/firestore");
// require("firebase/database");
// 6.2.2
// require("firebase/auth");
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: process.env.FIREBASE_DB,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appID: process.env.FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig);
module.exports.firebase = firebase
module.exports.firebaseAdmin = firebaseAdmin