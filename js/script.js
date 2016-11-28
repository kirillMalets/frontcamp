'use strict';

import 'babel-polyfill';
import 'whatwg-fetch';
import { html } from 'templates/news-feed';

let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=5a17c17619c4477cafd1dd15468104ff',
	element = document.querySelector('#news-block');

fetch(url)
	.then(response => response.json())
	.then(data => processData(data))
	.catch(error =>	console.log(error));

function processData(data) {
	for (let article of data.articles) {
		element.insertAdjacentHTML('beforeEnd', html);
	}
}