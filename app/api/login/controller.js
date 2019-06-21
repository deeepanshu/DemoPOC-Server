const { success } = require('./../../services/utils');
const { register } = require('./service');
const registerCtrl = async ({
    bodymen: {
        body
    }
}, res, next) => {
    register(body)
        .then((res)=>res)
        .then(success(res, 201))
        .catch(next)
}

module.exports.registerCtrl = registerCtrl;