
// event when link is clicked
$('.page-scroll').on('click',function(e){


	//take href contents
	var tujuan= $(this).attr('href');

	// catch element related
	var elementTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elementTujuan.offset().top -50

	}, 1250, 'easeInOutExpo');


	e.preventDefault();

});