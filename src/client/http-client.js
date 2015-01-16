var https = require('https');
var http = require('http');

var timeout = require('./scenarios/timeout');
var noConnection = require('./scenarios/no-connection');
var unknownDomain = require('./scenarios/unknown-domain');

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
			case 'unknown-domain':
				options = unknownDomain();
				break;
			case 'no-connection':
				options = noConnection();
				break;
		}

		return this.send(options, callback);
	};

	HttpClient.prototype.send = function (options, callback) {
		var s1 = Date.now();

		var client = http;
		if (options.protocol === 'https') {
			client = https;
		}

		console.log({	
			hostname: options.hostname || 'localhost',
			port: options.port || 8000,
			method: options.method || 'GET',
			path: options.path || '/',
			headers: options.headers || {}
		});

		client
			.request({
				hostname: options.hostname || 'localhost',
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
			})
			.end();
	};

	return new HttpClient();
})();
