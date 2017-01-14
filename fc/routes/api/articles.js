'use strict';
const imagePath = 'uploads/images';
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({dest: `public/${imagePath}`});
const router = express.Router();

const Article = require('../../models/article');

router.param('articleId', function(req, res, next, id) {
	req.articleId = id;
	next();
});


router.get('/', function(req, res, next) {

	Article.find(function(err, articles) {
			if (err)
				res.send(err);

			res.json(articles);
		});
});

router.get('/:articleId', function(req, res, next) {
	Article.findById(req.articleId, function (err, article){
		res.json({
			article: article,
			error: err
		})
	});
});

router.post('/', upload.single('titleImage'), function(req, res, next) {
	console.log(req.file);
	fs.rename(
		path.join(req.file.destination, req.file.filename),
		path.join(req.file.destination, req.file.filename + path.extname(req.file.originalname)),
		function(err) {
			if (err) {
				res.json({error: err});
				return;
			}
			const data = {
				title: req.body.title,
				text: req.body.text,
				imagePath: `${imagePath}/${req.file.filename}${path.extname(req.file.originalname)}`
			};
			const article = new Article(data);
			article.save(function(err, article) {
				res.redirect(301, `/articles/${article._id}`)
			})
		}
	);
});

router.put('/:articleId', function(req, res, next) {
	Article.findById(req.articleId, function (err, article){
		if (!err) {
			const data = {
				title: req.body.title,
				text: req.body.text,
				imagePath: `${imagePath}/${req.file.filename}${path.extname(req.file.originalname)}`
			};
			const article = new Article(data);
			article.save(function(err, article) {
				res.json({
					article: article,
					error: err
				})				
			}) //TODO Image update
		}
	});
});

router.delete('/:articleId', function(req, res, next) {
	Article.findById(req.articleId, function (err, article){
		article.remove(function(err, article) {
			res.json({
				article: article,
				error: err
			})
		}) //TODO Image removal
	});
});

module.exports = router;