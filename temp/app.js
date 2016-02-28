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

