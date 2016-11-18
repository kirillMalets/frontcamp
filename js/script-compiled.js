'use strict';

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
	for (var _iterator = data.articles, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var article = _ref;

		var html = '<article>\n\t\t\t\t\t\t\t\t\t<h1>' + article.title + '</h1>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<img src="' + article.urlToImage + '"  alt="' + article.title + '"/>\n\t\t\t\t\t\t\t\t\t<span>Author: ' + article.author + '</span>\n\t\t\t\t\t\t\t\t\t<p>' + article.description + '<a href="' + article.url + '">... Read more</a></p>\n\t\t\t\t\t\t\t\t</article>';
		element.insertAdjacentHTML('beforeEnd', html);
	}
}
