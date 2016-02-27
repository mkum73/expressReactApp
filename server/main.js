//"use strict";

var express = require('express');
var app = new express();

app.get('/',function(req,res){
	res.render('./../app/index.ejs',{});
})

app.use(express.static(__dirname + '/../temp'))
.listen(7777);


require('./router.js')(app);
module.exports = app;