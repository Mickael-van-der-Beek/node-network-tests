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

		httpClient.route('timeout', function (error, event) {
			console.log('ERROR=', error);
			console.log('EVENT=', event);
		});
	});
})();
