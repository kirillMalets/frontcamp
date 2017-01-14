var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
	title:  String,
	author: {type:String, default: 'Kirill'},
	text:   String,
	date: { type: Date, default: Date.now },
	imagePath: String
});

module.exports = mongoose.model('Article', blogSchema);

