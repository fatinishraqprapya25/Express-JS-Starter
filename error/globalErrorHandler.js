const { ZodError } = require("zod");
const sendResponse = require("../utils/sendResponse")

const globalErrorHandler = (error, req, res, next) => {
    let errors;
    if (error instanceof ZodError) {
        const formattedError = [];
        error.errors.map(err => {
            formattedError[formattedError.length] = { path: err.path.join("."), message: err.message };
        })
        errors = formattedError;
    }
    sendResponse(res, 500, {
        success: false,
        message: "validations failed",
        error: errors
    });
}

module.exports = globalErrorHandler;