'use strict';

var _ = require('lodash');
var mysql = require('mysql');
var validation = require('../validation.js');

var schema = {
	id: 'number',
	listId: 'number',
	typeId: 'number',
	amount: 'number',
	date: 'string',
	desc: 'string'
};

var fields = Object.getOwnPropertyNames(schema);

var equityItem = {
	'by-list': function(listId) {
		validation.assertType(listId, 'number', 'listId');
				
		return 'select * from equityItem where listId = ' + listId;
	},
	new: function(listId) {
		validation.assertType(listId, 'number', 'listId');
				
		return 'insert into equityItem set listId = ' + listId;
	},
	update: function(item) {
		validation.assertSchema(item, schema);
		validation.assertType(item.id, 'number', 'id');

		var sql = "update equityItem set ? where id = " + item.id;
		return mysql.format(sql, _.pick(item, fields));

		//var keys = _.filter(fields, function(f) { return item.hasOwnProperty(f); });
		//var sql = "update equityItem set " +
		//	_.map(keys, function(k) { return '?? = ?'; } ).join(', ') +
		//	" where id = " + item.id;

		//return mysql.format(sql, _(keys).map(function(k) { return [k, item[k]]; }).flatten());
	}
};

module.exports = require('../controllers.js')('equity-item', equityItem);