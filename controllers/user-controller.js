const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    
    // get a single user by id with populated thought and friend data
    getUser(req, res) {
        User.findOne({ _id: req.params.id })
            .populate('thought')
            .populate('friend')
            .select('-__v')
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                   res.status(404).json({ message: 'No user found with this id!' });
                    return; 
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    
    // create a new user
    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err)); 
    },
    
    // update user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, {
            new: true,
            runValidators: true
        }
        )
        .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    
    // delete user by id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    
    // remove a user's associated thoughts when deleted - BONUS
    // Thought.findOneAndDelete?
    
    // add a new friend (:friendId) to a user's friend list (:userId)
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, {$push: {friends: req.params.friendsId}})
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id! '});
                    return;
                }
                res.json(dbUserData);
            })
    },
    
    // remove a friend (:friendId) from a user's friend list (:userId)
    deleteFriend(req, res) {
        User.findOneAndUpdate({ _id: params.userId }, {$pull: {friends: req.params.friendsId}})
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id! '});
                    return;
                }
                res.json(dbUserData);
            })
    },
};

module.exports = userController;