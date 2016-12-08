'use strict';

import 'babel-polyfill';
import 'whatwg-fetch';
import {render} from './templates/news-feed-tpl';

let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=5a17c17619c4477cafd1dd15468104ff',
	element = document.querySelector('#news-block');

class newsFeedFactory {
	constructor(url) {
		this.url = url;
	};

	getFeedData() {
		return new Promise((resolve, reject) => {
			fetch(this.url)
				.then(response => response.json())
				.then(data => resolve(data))
				.catch(error => console.log(error));
		})
	}
} //factory

function showNews() {
	let dataFactory = new newsFeedFactory(url);

	dataFactory.getFeedData().then(data => {
		for (let article of data.articles) {
			element.insertAdjacentHTML('beforeEnd', render(article));
		}
	})
}
showNews(); //facade
