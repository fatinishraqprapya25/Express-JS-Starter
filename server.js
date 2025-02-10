const mongoose = require("mongoose");
const config = require("./config");
const app = require("./index");

let server;

const main = async () => {
    try {
        const { port, mongoConnectionString } = config;
        await mongoose.connect(mongoConnectionString);
        server = app.listen(port, () => {
            console.log(`🚀 Server listening at port ${port}`);
        })
    } catch (err) {
        console.log("❌ Error connecting to database:", err.message)
    }
}

main();