const validateRequest = (schema) => {
    return async function (req, res, next) {
        try {
            await schema.parseAsync(req.body);
            return next();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = validateRequest;