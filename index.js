var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/frontend'));

var processPort = process.env.PORT || 3000;
var processHost = process.env.HOST || 'localhost';
app.listen(processPort, function() {
    console.log('Server running on http://' + processHost + ':' + processPort);
});
