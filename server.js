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

process.on("uncaughtException", (err) => {
    console.error(err.name, err.message);
    console.error("💥 Uncaught Exception! Shutting down...");
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log("💥 Unhandled Rejection! Shutting down...");
    process.exit(1);
});