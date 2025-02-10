const authFeatures = require("./auth.features");
const authRouter = require("express").Router();

authRouter.post("/user", authFeatures.register);


module.exports = authRouter;