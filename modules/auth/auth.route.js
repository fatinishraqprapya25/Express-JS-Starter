const validateRequest = require("../../middlewares/validateRequest");
const authFeatures = require("./auth.features");
const authValidations = require("./auth.validations");
const authRouter = require("express").Router();

authRouter.post("/", validateRequest(authValidations.registerValidation), authFeatures.register);


module.exports = authRouter;