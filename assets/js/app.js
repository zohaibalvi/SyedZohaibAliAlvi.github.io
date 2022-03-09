(function($) {

	$(function() {

$(".scrolly").click(function() {
    $('html, body').animate({
        scrollTop: $(".myDiv").offset().top
    }, 2000);
});

  let $sitelading = $('#site-landing');
    $sitelading.polygonizr();

    // Update size.
    $(window).resize(function() {
        $sitelading.polygonizr("stop");
        $sitelading.polygonizr({
            canvasHeight: $(this).height(),
            canvasWidth: $(this).width()
        });
        $sitelading.polygonizr("refresh");
    });
		

	});

})(jQuery);