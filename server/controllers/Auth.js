const { errors, success } = require("../utils/responseWrapper");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signupController = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            gender,
            avatar,
            domain,
            available,
            email,
            password,
        } = req.body;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !gender ||
            !domain ||
            !available
        ) {
            return res.send(errors(404, "All Fields are required"));
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.send(errors(400, "user already Exists"));
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        console.log("hashed password : ", hashedpassword);

        const newUser = await User.create({
            password: hashedpassword,
            firstName,
            lastName,
            gender,
            email,
            domain,
            available,
        });
        return res.send(success(200, "user created successfully", newUser));
    } catch (error) {
        return res.send(errors(500, error.message));
    }
};

exports.loginController = async (req, res) => {
    try {
    } catch (e) {
        return res.send(errors(500, e.message));
    }
};
