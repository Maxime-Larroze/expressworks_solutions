const express = require('express');
const fs = require('fs');
const app = express();
const portNumber = process.argv[2];
const fileName   = process.argv[3];
app.get('/books', function(req, res) {
  fs.readFile(fileName, function(err, data) {
    if (err) return err;
    let books = JSON.parse(data);
    res.json(books);
  });
});
app.listen(portNumber);