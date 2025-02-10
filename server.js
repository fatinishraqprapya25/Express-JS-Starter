const mongoose = require("mongoose");
const config = require("./config");
const app = require("./index");

let server;

const main = async () => {
    try {
        const { port, mongoConnectionString } = config;
        console.log(mongoConnectionString)
        await mongoose.connect(mongoConnectionString)
            .then(() => console.log("Connected to database!"));
        server = app.listen(port, console.log("server listening at port ", port))
    } catch (err) {
        throw new Error(err);
    }
}

main();