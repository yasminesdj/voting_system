const Vote = require('../models/Vote');

exports.vote = async (req, res) => {
  try {
    const { voterId, candidateId } = req.body;
    const existingVote = await Vote.findOne({ voterId });
    if (existingVote) {
      return res.status(400).json({ error: 'Duplicate vote' });
    }

    const newVote = new Vote({ voterId, candidateId });
    await newVote.save();
    res.status(201).json(newVote);
  } catch (error) {
    res.status(500).json({ error: 'Error casting vote' });
  }
};
