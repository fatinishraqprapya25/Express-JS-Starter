const validateRequest = (schema, cb = "") => {
    return async function (req, res, next) {
        try {
            await schema.parseAsync(req.body);
            return next();
        } catch (err) {
            console.log("validation failed!")
            if (cb !== "") cb(req.file.path);
            next(err);
        }
    }
}

module.exports = validateRequest;