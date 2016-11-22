var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(PORT, function(){
   console.log('Server started on port 3000');
});

