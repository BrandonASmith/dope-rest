var mongoose = require('mongoose');

var MenuSchema = mongoose.Schema({
	name: String,
	description: String,
	price: Number
});

module.exports = mongoose.model('Menu', MenuSchema);