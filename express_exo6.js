const express = require('express');
const app = express();
const portNumber = process.argv[2];
app.put('/message/:id', function(req, res) {
  let id = req.params.id;
  let dateIdHash = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
  res.send(dateIdHash);
});
app.listen(portNumber);