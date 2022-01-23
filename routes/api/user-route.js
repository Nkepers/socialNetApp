const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require("../../controllers/user-controller");

// GET all and POST at /api/Users
router.route("/").get(getAllUsers).post(createUser);

// GET one, PUT, and DELETE at /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// ADD and DELETE Friend
router.route("/users/:userid/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;