$(window).scroll(function(){

	var wScroll = $(this).scrollTop(),
		people = $('.section3_person'),
		section5 = $('.section5__blocks');

	if ( wScroll > $('.service-blocks').offset().top ) {

		$(people).each(function(i){

			setTimeout(function(){
				people.eq(i).addClass('section3_person-isShowing');
			}, 150 * (i+1) );
			
		});
	}

	if ( wScroll > $('.section4__content2').offset().top ) {

		$(section5).each(function(i){
			
			setTimeout(function(){
				section5.eq(i).addClass('section5__blocks-isshowing');
			}, 150 * (i+1) );
			
		});
	}	



})