const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).delete(deleteUserById);

router.route('/:Id/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;