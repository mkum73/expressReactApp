
module.exports = function(app){


	app.route('/product')
	.get(function(req,res){
		res.render('./../app/views/product.ejs',{});
	});

	app.route('/productPage/:id')
	.get(function(req,res){
		res.render('./../app/views/productPage.ejs', { 'productID' : req.params.id });
	})
}

