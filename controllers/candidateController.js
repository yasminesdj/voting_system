const Candidate = require('../models/Candidate');
const User = require('../models/User');

exports.addCandidate = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const user = await User.findById(userId);
    if (!user || user.role !== 'user') {
      return res.status(400).json({ error: 'Invalid user' });
    }

    const newCandidate = new Candidate({ name, userId });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ error: 'Error adding candidate' });
  }
};
