var page = require('webpage').create(),
	address;

if (phantom.args.length < 1 || phantom.args.length > 1) {
    console.log('Usage: codeevaluation.js URL');
    phantom.exit();
} else {
    address = phantom.args[0];
	page.onConsoleMessage = function (msg) {
	    console.log('Page title is "' + msg + '"');
	};
	page.open(address, function (status) {
	    page.evaluate(function () {
	        console.log(document.title);
	    });
	});
}