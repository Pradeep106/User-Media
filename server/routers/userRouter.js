const router = require("express").Router();

const userController = require("../controllers/User");

const authController = require("../controllers/Auth");

const { getAllUsers, updateUser, deleteUser, getUserById } = userController;

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", authController.signupController);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
