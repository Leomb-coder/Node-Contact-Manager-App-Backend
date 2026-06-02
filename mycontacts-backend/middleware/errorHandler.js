const {constants} = require('../constants')

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.NOT_FOUND_ERR:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.UNAUTHORIZED_ERR:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.FORBIDDEN_ERR:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.SERVER_ERR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        default:
            console.log("No Error, all Good!")
            break;
    }
};

module.exports = errorHandler;