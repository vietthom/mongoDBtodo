const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, addHobbyToUserById } = require('../../../controller/userController');
// /api/users prepended to every route
// router.post('/', createUser);
// router.get('/', getAllUsers);
router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.put('/addhobby/:userId', addHobbyToUserById);

router.route('/:userId')
    .get(getUserById)
    .delete(deleteUserById)
    .put(updateUserById);

module.exports = router;

// /api/users