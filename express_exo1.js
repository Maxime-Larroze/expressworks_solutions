const express = require('express');
const app = express();
app.get('/home', function(request, response){response.end("Bonjour, monde !");});
app.listen(process.argv[2])