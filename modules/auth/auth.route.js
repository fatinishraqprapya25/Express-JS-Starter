const authFeatures = require("./auth.features");
const authRouter = require("express").Router();

authRouter.post("/auth", authFeatures.register);


module.exports = authRouter;