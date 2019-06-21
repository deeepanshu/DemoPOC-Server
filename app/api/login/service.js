const { serviceResponse } =  require("../../services/utils");

const register = async (params) => {
    try {
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

module.exports.register = register;