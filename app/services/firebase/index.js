const firebaseAdmin = require('firebase-admin');

const serviceAccount = require("../../keys/serviceAccount.json");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://firepoc-2f826.firebaseio.com"
});

// firepoc-2f826-firebase-adminsdk-21rip-37f5231509