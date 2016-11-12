'use strict';

let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=5a17c17619c4477cafd1dd15468104ff',
	element = document.querySelector('#news-block');

fetch(url)
	.then(response => response.json())
	.then(data => processData(data))
	.catch(error =>	console.log(error));

function processData(data) {
	for (let article of data.articles) {
		let html = `<article>
									<h1>${article.title}</h1>									
									<img src="${article.urlToImage}"  alt="${article.title}"/>
									<span>Author: ${article.author}</span>
									<p>${article.description}<a href="${article.url}">... Read more</a></p>
								</article>`;
		element.insertAdjacentHTML('beforeEnd', html);

	}
}