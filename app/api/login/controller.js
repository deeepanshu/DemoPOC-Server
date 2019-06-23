const { success } = require('./../../services/utils');
const { register, login, deleteUser } = require('./service');
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

const loginCtrl = async ({
    bodymen: {
        body
    }
}, res, next) => {
    login(body)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

const deleteUserCtrl = async({
    bodymen: {
        body
    }
}, res, next) => {
    deleteUser(body)
        .then((res) => res)
        .then(success(res, 201))
        .catch(next)
}

module.exports.registerCtrl = registerCtrl;
module.exports.loginCtrl = loginCtrl;
module.exports.deleteUserCtrl = deleteUserCtrl;