'use strict';

const express = require('express');
const router = express.Router();

const Article = require('../models/article');

router.param('articleId', function(req, res, next, id) {
	req.articleId = id;
	next();
});


router.get('/', function(req, res, next) {

});

router.get('/:articleId', function(req, res, next) {
	console.log(req.articleId);
	Article.findById(req.articleId, function (err, article){
		res.render('article', {
			title: 'Article',
			article: article,
			error: err
		})
	});
});



module.exports = router;