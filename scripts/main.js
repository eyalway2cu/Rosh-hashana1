/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

/**
 * Show tranzila dialog.
 */
function showTranzilla(event) {
	event.preventDefault();

	var form = $(this);
	var data = {};
	var iframe = $('<iframe>');
	var url = 'https://direct.tranzila.com/<account>/iframe.php?';

	// prepare params for tranzilla
	var params = {
		lang: 'he',
		sum: 100,
		cred_type: 8,
		currency: 1
	};

	// configure iframe
	iframe
		.attr('id', 'tranzila')
		.attr('frameborder', 0)
		.attr('src', url + $.param(params))
		.appendTo($('body'));

	// show iframe
	iframe.addClass('visible');

	if (error)
		var response = true; else
		var response = false;

	return response;
}

function on_site_load() {
	$('a.donate_now').click(showTranzilla);
}

$(on_site_load);
