var slideMenu = function(elem,intialState,finalState,context){

	if(elem.hasClass('active')){
		elem.removeClass('active');
		context.removeClass('active');
		elem.animate({
			'opacity':0,
			'width':intialState
		},800);
	}else{
		elem.addClass('active');
		context.addClass('active');
		elem.animate({
			'opacity':1,
			'width':finalState
		},800);
	}
}

            

$('.navbar-header .fa-bars').on('click',function(event) {
	event.preventDefault();
	slideMenu($('.side-menu'),0,'85%',$(this));
});

$('.navbar-header .fa-shopping-cart').on('click',function(event) {
	event.preventDefault();
	slideMenu($('.shopping-cart-box'),0,'85%',$(this));
});

$('.navbar-header .fa-search').on('click',function(event) {
	event.preventDefault();
	var elem = $(this);
	if(elem.hasClass('active')){
		elem.removeClass('active');
		$('.search-box').slideUp(500);
	}else{
		elem.addClass('active');
		$('.search-box').slideDown(500);
	}
});



