const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    avatar: {
        type: String,
    },
});

module.exports = mongoose.model("user", userSchema);
