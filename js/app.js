'use strict';

document.getElementById('loadNews').onclick = function() {
	require.ensure([], function(require) {
		require('./news-feed');
	});
};