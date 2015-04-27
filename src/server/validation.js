'use strict';

var restify = require('restify');

var assertType = function(value, type, name) {
	if (typeof value !== type)
		throw new restify.BadRequestError('Expected parameter "' + name + '" to be of type "' + type + '", but received ' + (typeof value) + ' instead');
};

var assertSchema = function(obj, schema) {
	if (!obj)
		throw new restiry.BadRequestError('Expected request object, but none was provided');

	var fields = Object.getOwnPropertyNames(schema);
	for (var i = 0; i < fields.length; ++i) {
		var f = fields[i];
		if (obj.hasOwnProperty(f))
			assertType(obj[f], schema[f], f);
	} // for( i )
};

module.exports = {
	assertSchema: assertSchema,
	assertType: assertType
};