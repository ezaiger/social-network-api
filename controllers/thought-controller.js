const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    }, 
    
    // get a single thought by id
    getThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    }, 
    
    // create a new thought and push id to associated user thoughts
    createThought (req, res) {
        Thought.create({ $push: { _id: req.params.userId }})
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err)); 
    },
    
    // update a thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {new: true})
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    
    // remove a thought by its id
    removeThought(req, res) {
        Thought.findByIdAndRemove({ _id: req.params.thoughtId })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    
    // create a reaction stored in a single thought's reactions array field
    addReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    
    // pull and remove a reaction by the reactionId value
    removeReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id! '});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
};

module.exports = thoughtController;