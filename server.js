const mongoose = require("mongoose");
const app = require("./index");

let server;

const main = async () => {
    mongoose.connect();
    server = app.listen(5000, console.log("server listening at port ", 5000))
}

main();