const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find()
    },
    
    // get a single user by id with populated thought and friend data
    getUser(req, res) {

    },
    
    // create a new user
    createUser(req, res) {

    },
    
    // update user by id
    updateUser(req, res) {

    },
    
    // delete user by id
    deleteUser(req, res) {

    },
    
    // remove a user's associated thoughts when deleted
    removeThought(req, res) {

    },
    
    // add a new friend (:friendId) to a user's friend list (:userId)
    addFriend(req, res) {

    },
    
    // remove a friend (:friendId) from a user's friend list (:userId)
    deleteFriend(req, res) {

    }
};

module.exports = userController;