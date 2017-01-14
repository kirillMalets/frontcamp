import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
const ReactDOM = require('react-dom');


class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {article: {}};
	}
	componentDidMount() {
		fetch(`/api/articles/${this.props.params.articleId}`)
			.then(response => response.json())
			.then(data => this.setState(data))
			.catch(error => console.log(error));
	}
	render() {
		const {title, author, imagePath, date, text}=this.state.article;
		return (
			<div className="article">
					<h1>{title}</h1>
					<span>{author}</span>
					<img src={imagePath} />
					<p>{text}</p>
					<time>{date}</time>
			</div>
		)

	}
}

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {articles: []};
	}
	componentDidMount() {
		fetch('/api/articles')
			.then(response => response.json())
			.then(articles => this.setState({articles}))
			.catch(error => console.log(error));
	}
	render() {
		const {articles} = this.state;
		return (
			<ul>
				{articles.map(article=>{
					return (
						<li key={article._id}>
							<Link to={`/articles/${article._id}`}>{article.title}</Link>
						</li>
					)
				})}
			</ul>
		);
	}
}
const App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<header>
					<Link to='/articles'>Articles</Link>
				</header>

				{this.props.children}
			</div>
		);
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="articles" component={Articles} />
			<Route path="articles/:articleId" component={Article}/>
		</Route>
	</Router>,
	document.getElementById('root')
);