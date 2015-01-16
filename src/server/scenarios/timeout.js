module.exports = (function () {
	'use strict';

	return function (req, res) {
		setTimeout(function (e) {
			res.statusCode = 200;
			res.end();
		}, 3 * 60 * 1000);
	};
})();
