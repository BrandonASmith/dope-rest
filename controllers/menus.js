var Menu = require('../models/menu');

function getAll(request, response) {
	console.log("Menu controller getAll")
	response.send('controller index')
	// Menu.find({}, function(error, menus) {
	// 	if (error) response.json ({message: "Could not find menu"});
	// })
}

// function createMenu (request, respond) {
// 	var Menu = new Menu();

// 	menu.name = request.body.name
// 	menu.description = request.body.description
// 	menu.price = request.body.price;

// 	menu.save(function(error){
// 		if(error) response.json ({message: "Could not create menu"});
// 		response.redirect('/menu');
// 	});
// }

module.exports = {
	getAll: getAll

}