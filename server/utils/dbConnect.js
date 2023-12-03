const mongoose = require("mongoose");

const url =
    "mongodb+srv://pradp137:pradeep123@cluster0.3js7hpc.mongodb.net/Assignment?retryWrites=true&w=majority";

exports.connect = () => {
    mongoose
        .connect(url, {
           
        })
        .then(() => {
            console.log("MongoDb connected Successfully");
        })
        .catch((error) => {
            console.log("DB connection failed");
            console.error(error);
            process.exit(1);
        });
};
