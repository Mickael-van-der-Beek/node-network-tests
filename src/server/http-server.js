var http = require('http');

var timeout = require('./scenarios/timeout');

module.exports = (function () {
	'use strict';

	function HttpServer () {}

	HttpServer.prototype.init = function () {
		this.server = http.createServer(this.route.bind(this));
	};

	HttpServer.prototype.route = function (req, res) {
		var url = req.url
			.split('/')
			.pop();

		switch (url) {
			case 'timeout':
				timeout(req, res);
				break;
		}
	};

	HttpServer.prototype.listen = function (port, callback) {
		this.server.listen(port, callback);
	};

	return new HttpServer();
})();
