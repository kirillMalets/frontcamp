'use strict';

var _newsFeed = require('templates/news-feed');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=5a17c17619c4477cafd1dd15468104ff',
    element = document.querySelector('#news-block');

fetch(url).then(function (response) {
	return response.json();
}).then(function (data) {
	return processData(data);
}).catch(function (error) {
	return console.log(error);
});

function processData(data) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var article = _step.value;

			element.insertAdjacentHTML('beforeEnd', _newsFeed.html);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

var News = function News() {
	_classCallCheck(this, News);
};

;
