const router = require('express').Router();

const { getAllUsers, getUser, createUser, updateUser, deleteUser, removeThought, addFriend, deleteFriend } = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/users/:userId
router
    .route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// remove user's thought when deleted
// /api/users/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;