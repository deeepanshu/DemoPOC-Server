const serviceResponse = params => {
    let err = params.err || null;
    let res = params.res || null;
    let msg = params.msg || null;
    return { err, res, msg };
};

const success = (res, status) => entity => {
    if (entity) {
        res.status(status || 200).json(entity);
    }
    return null;
};

module.exports.serviceResponse = serviceResponse;
module.exports.success = success;