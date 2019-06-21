module.exports =  {
    bodyErrorHandler: () => {
        return function (err, req, res, next) {
            if (req.bodymen && req.bodymen.error) {
                var errorList = []; var err = '';
                if (Array.isArray(req.bodymen.error)) {
                    for (let err of req.bodymen.error) {
                        errorList.push(err.message);
                    }
                } else {
                    err = req.bodymen.error.message;
                }
                res.status(400).json({
                    err: errorList.length > 0 || err,
                    res: null
                })
            } else {
                next(err);
            }
        }
    },
    queryErrorHandler: () => {
        return function (err, req, res, next) {
            if (req.querymen && req.querymen.error) {
                var errorList = []; var err = '';
                if (Array.isArray(req.querymen.error)) {
                    for (let err of req.querymen.error) {
                        errorList.push(err.message);
                    }
                } else {
                    err = req.querymen.error.message;
                }
                res.status(400).json({
                    err: errorList.length > 0 || err,
                    res: null
                })
            } else {
                next(err);
            }
        }
    }

}
