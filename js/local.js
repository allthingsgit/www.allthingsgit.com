$(document).ready(function() {
	/* Ensure the main window takes up as much of the viewport as possible,
	 * pushing the footer to the bottom of the page always.
	 */
	var main_resize = function() {
		/* grow the body to full screen height, keeping only the header and
		 * the featured player visible.  (add an extra 60px on iphone to
		 * account for its navigation bar in landscape
		 */
		var reserved_height = $("header").height() + $("#featured_player").height();
		if (navigator.platform == 'iPhone' && Math.abs(window.orientation) === 90) {
			reserved_height += 60;
		}
		$("#fullheight").height($(window).height() - reserved_height);

		$("main").height('auto');
		var used = $("main").offset().top + $("main").outerHeight() + $("footer").outerHeight();

		if (used < $(window).height()) {
			$("main").height($("main").height() + ($(window).height() - used));
		}


		var logo_height = $("#intro .logo").height();
		var description_height = $("#intro .description").height();

		if (logo_height > description_height) {
			$("#intro .description").css("margin-top", (logo_height - description_height));
			$("#intro .logo").css("margin-top", 0);
		} else {
			$("#intro .description").css("margin-top", 0);
			$("#intro .logo").css("margin-top", (description_height - logo_height));
		}
	}
	main_resize();
	$(window).resize(main_resize);
	$(window).on("orientationchange", main_resize);

	/* Set the header to float when we scroll */
	$(window).scroll(function() {
		var scroll = window.pageYOffset || document.documentElement.scrollTop;

		if (scroll > 0) {
			$('header').addClass('floating');
		} else {
			$('header').removeClass('floating');
		}
	});

	$('#links-button').click(function() {
		$('header nav#links ul').toggleClass('visible');
	});

	$('#link_subscribe > a').click(function() {
		$('#subscribe_links').toggleClass('visible');
		return false;
	});

	$('audio,video').mediaelementplayer({
		videoWidth: '100%',
		videoHeight: '100%',
		audioWidth: '100%',
		features: ['playpause','current','progress','duration','volume'],
		videoVolume: 'horizontal'
	});
});
