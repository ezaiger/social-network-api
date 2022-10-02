const router = require('express').Router();

const { getAllThoughts, getThought, createThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(removeThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;