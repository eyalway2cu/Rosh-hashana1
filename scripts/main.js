/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

var Caracal = Caracal || {};


/**
 * Show tranzila dialog.
 */
function showTranzilla(event) {
	event.preventDefault();

	var form = $(this);
	var data = {};
	var url = 'https://direct.tranzila.com/<account>/iframe.php?';

	// prepare params for tranzilla
	var params = {
		lang: 'he',
		sum: 100,
		cred_type: 8,
		currency: 1
	};

	// create iframe if needed
	if (Caracal.iframe === undefined) {
		Caracal.iframe = $('<iframe>');

		Caracal.iframe
			.attr('id', 'tranzila')
			.attr('frameborder', 0)
			.attr('src', url + $.param(params))
			.appendTo($('body'));

		Caracal.background = $('<div>');
		Caracal.background
			.addClass('iframe-background')
			.click(function(event) {
				event.preventDefault();
				Caracal.background.removeClass('visible');
				Caracal.iframe.removeClass('visible');
			})
			.appendTo($('body'));
	}

	// show iframe
	setTimeout(function() {
		Caracal.background.addClass('visible');
		Caracal.iframe.addClass('visible');
	}, 50);

	return response;
}

function on_site_load() {
	$('a.donate_now').click(showTranzilla);
}

$(on_site_load);
