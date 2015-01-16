module.exports = function () {
	'use strict';

	return {
		protocol: 'https',
		hostname: 'www.youtube.com',
		port: 443,
		headers: {
			Host: 'www.youtube.com',
			Accept: 'text/html',
			'User-Agent': 'Mozillla'
		}
	};
};
