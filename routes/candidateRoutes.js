const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/add', candidateController.addCandidate);

module.exports = router;
