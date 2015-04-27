'use strict';

var validation = require('../validation.js');

var equityList = {
	get: function(listId) {
		validation.assertType(listId, 'number', 'listId');
				
		return 'select * from equityList where id = ' + listId;
	},
	items: function(listId) {
		validation.assertType(listId, 'number', 'listId');

		return 'select * from equityItem where listId = ' + listId;
	}
};

module.exports = require('../controllers.js')('equity-list', equityList);