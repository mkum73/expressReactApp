//"use strict";

var express = require('express');
var app = new express();

app.get('/',function(req,res){
	res.render('./../app/index.ejs',{});
})

app.use(express.static(__dirname + '/../temp'))

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

require('./router.js')(app);
module.exports = app;