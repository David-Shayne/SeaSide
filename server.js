const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const propertyAPI = require('./routes/propertyAPI');
const path = require('path');
const testAPI = require('./routes/testAPI');

app.use(express.urlencoded()).use(express.json());

app.use('/api/property', propertyAPI);
app.use('/api/test', testAPI);
mongoose
  .connect(keys.MongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .catch((err) => {
    if (err) throw err;
  })
  .then(console.log('MongoDB Connected'));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(keys.PORT, console.log(`server running on port ${keys.PORT}...`));
