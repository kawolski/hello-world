const PORT = 8080;
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!...... PROD');
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});