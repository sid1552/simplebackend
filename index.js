require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/name', function (req, res) {
  res.send('<h2>siddharth singh</h2>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT} `);
});
