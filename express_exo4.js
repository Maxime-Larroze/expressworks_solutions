const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const portNumber = process.argv[2];
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
    let str = req.body.str;
    let strReversed = str.split('').reverse().join('');
    res.send(strReversed);
});
app.listen(portNumber);