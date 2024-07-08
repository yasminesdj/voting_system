const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const voteRoutes = require('./routes/voteRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://watcherKnight:hollow123@watcherknightdb.zt7ksjq.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/votes', voteRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
