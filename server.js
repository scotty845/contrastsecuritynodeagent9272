

var express = require('express');
var app = express();


// define routes routes are in ./routes/nodeagent
var nodeagent = require('./routes/nodeagent')  

// define a public directory for css and images for use with ejs
app.use(express.static(__dirname + '/public'));

//define the view engine to use ejs template for now
app.set('view engine', 'ejs');

app.use('/', nodeagent)


//run the node server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});



module.exports = server;