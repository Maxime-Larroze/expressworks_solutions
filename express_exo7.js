const express = require('express');
const app = express();
const portNumber = process.argv[2];
app.get('/search', function(req, res) {
  let query = req.query;
  res.send(query);
});
app.listen(portNumber);