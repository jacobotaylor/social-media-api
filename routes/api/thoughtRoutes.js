const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    addReaction,
    deleteThoughtById,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/')
      .get(getAllThoughts);

router.route('/:id')
      .get(getThoughtById)
      .delete(deleteThoughtById); 

router.route('/:userId')    
      .post(createThought);

router.route('/:thoughtId/reactions')
      .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
      .delete(deleteReaction);

module.exports = router;