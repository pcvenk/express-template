var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/employees', function(req, res){

   var employees = [
      {
         firstName: 'John',
         lastName: 'Doe',
         age: 32,
         countryOfResidence: 'USA'
      },
      {
         firstName: 'Jane',
         lastName: 'Doe',
         age: 22,
         countryOfResidence: 'USA'
      },
      {
         firstName: 'Mark',
         lastName: 'Smith',
         age: 43,
         countryOfResidence: 'Canada'
      }
   ];

   res.json(employees);

});

app.get('/about', function(req, res){
   res.redirect('/about.html');
});

app.get('/services', function(req, res){
   res.redirect('/services.html');
});

app.post('/subscribe', function(req, res){
   var name = req.body.name;
   var email = req.body.email;
   res.send('User '+name + ' subscribed with '+email);
});

app.listen(PORT, function(){
   console.log('Server started on port 3000');
});

