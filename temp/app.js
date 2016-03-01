var slideMenu = function(elem,intialState,finalState){

	if(elem.hasClass('active')){
		elem.removeClass('active');
		//this.removeClass('active');
		elem.animate({
			'opacity':0,
			'width':intialState
		},800);
	}else{
		elem.addClass('active');
		//this.addClass('active');
		elem.animate({
			'opacity':1,
			'width':finalState
		},800);
	}
}

            

$('.navbar-header .fa-bars').on('click',function(event) {
	event.preventDefault();
	slideMenu($('.side-menu'),0,'85%');
});

$('.navbar-header .fa-shopping-cart').on('click',function(event) {
	event.preventDefault();
	slideMenu($('.shopping-cart-box'),0,'85%');
});

$('.navbar-header .fa-search').on('click',function(event) {
	event.preventDefault();
	$('.search-box').slideDown(500);
});


$('.add-cart').on('click',function(event){
	event.preventDefault();
	addToCart(productId);
});

	var cartItems = [];
var addToCart = function(){
	cartItems.push(getProductDetails(productId));
};



var getProductDetails = function(productId){
	var product_details = {
      "img_url": "placeholder.png",
      "product_name": "T shirt",
      "offer_price": 742,
      "price": 4200,
      "offer": "10%",
      "rating": 4
    }
    product_details = JSON.stringify(product_details);
    return product_details;
};

