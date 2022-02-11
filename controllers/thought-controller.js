const {Thoughthought} = require('../models')

module.exports = {
    // Get all courses
    getAllThoughts(req, res) {
      thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      deleteThoughtById(req, res) {
        thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : Student.deleteMany({ _id: { $in: thought.students } })
          )
          .then(() => res.json({ message: 'thought deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
      addReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    
      deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            { $pull: { reactions: { reactionId: params.reactionId }}},
            { new : true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
    };