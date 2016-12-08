'use strict';

import '../less/styles.less';

document.getElementById('loadNews').onclick = function() {
	require.ensure([], function(require) {
		require('./news-feed');
	});
};