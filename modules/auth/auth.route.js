const authFeatures = require("./auth.features");
const authRouter = require("express").Router();

authRouter.post("/", authFeatures.register);


module.exports = authRouter;