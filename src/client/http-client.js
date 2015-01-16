var http = require('http');

var timeout = require('./scenarios/timeout');

module.exports = (function () {
	'use strict';

	function HttpClient () {}

	HttpClient.prototype.init = function () {};

	HttpClient.prototype.route = function (scenario, callback) {
		var options = null;

		switch (scenario) {
			case 'timeout':
				options = timeout();
				break;
		}

		return this.send(options, callback);
	};

	HttpClient.prototype.send = function (options, callback) {
		var s1 = Date.now();
		http
			.request({
				hostname: options.host || 'localhost',
				port: options.port || 8000,
				method: options.method || 'GET',
				path: options.path || '/',
				headers: options.headers || {}
			})
			.on('close', function () {
				console.log('TIME=', (Date.now() - s1), 'ms');
				return callback(null, 'close');
			})
			.on('end', function () {
				console.log('TIME=', (Date.now() - s1), 'ms');
				return callback(null, 'end');
			})
			.on('error', function (e) {
				console.log('TIME=', (Date.now() - s1), 'ms');
				return callback(e, 'error');
			});
	};

	return new HttpClient();
})();
