var httpServer = require('./server/http-server');
var httpClient = require('./client/http-client');

module.exports = (function () {
	'use strict';

	httpServer.init();
	httpClient.init();

	httpServer.listen(8000, function (error) {
		if (error) {
			throw error;
		}

		// httpClient.route('timeout', function (error, event) {
		// 	console.log(new Array(81).join('-'));
		// 	console.log('ERROR=', error);
		// 	console.log('EVENT=', event);
		// 	console.log(new Array(81).join('-'));
		// });

		// httpClient.route('unknown-domain', function (error, event) {
		// 	console.log(new Array(81).join('-'));
		// 	console.log('ERROR=', error);
		// 	console.log('EVENT=', event);
		// 	console.log(new Array(81).join('-'));
		// });

		httpClient.route('no-connection', function (error, event) {
			console.log(new Array(81).join('-'));
			console.log('ERROR=', error);
			console.log('EVENT=', event);
			console.log(new Array(81).join('-'));
		});
	});
})();
