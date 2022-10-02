const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {

    }, 
    
    // get a single thought by id
    getThought(req, res) {

    }, 
    
    // create a new thought and push id to associated user thoughts
    createThought (req, res) {

    },
    
    // update a thought by id
    updateThought(req, res) {

    },
    
    // remove a thought by its id
    removeThought(req, res) {

    },
    
    // create a reaction stored in a single thought's reactions array field
    addReaction(req, res) {

    },
    
    // pull and remove a reaction by the reactionId value
    removeReaction(req, res) {

    },
};

module.exports = thoughtController;