const { errors, success } = require("../utils/responseWrapper");
const User = require("../models/User.js");

const getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ id: id });

  if (!user) {
    return res.send(errors(400, "user not found"));
  }

  return res.send(success(200, "user found ", user));
};

const updateUser = async (req, res) => {
  try {
    const { id, firstName, lastName, gender, email, domain, available } =
      req.body;

    const user = await User.findOne({ id });
    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    if (email) {
      user.email = email;
    }

    if (gender) {
      user.gender = gender;
    }
    if (available != undefined) {
      user.available = available;
    }
    if (domain) {
      user.domain = domain;
    }

    await user.save();

    return res.send(success(200, "user updated Successfully", user));
  } catch (error) {
    return res.send(errors(500, error.message));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.body;

    const user = await User.findOne({ id: user_id });
    await user.remove();

    return res.send(success(200, "user deleted Successfully"));
  } catch (error) {
    return res.send(errors(500, error.message));
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { page } = req.query;

    const userData = await User.find({});

    if (!userData) {
      return res.send(errors(400, "data not found"));
    }
   
    const startIndex = (page - 1) * 20;
    const endIndex = page * 20;

    const paginationData = userData?.slice(startIndex, endIndex);

    return res.send(
      success(200, "fetched All Users", { data: paginationData,userData })
    );
  } catch (error) {
    return res.send(errors(500, error.message));
  }
};

module.exports = {
  // createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
};
