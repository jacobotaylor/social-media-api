const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { db } = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));