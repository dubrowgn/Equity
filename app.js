// libs
var riot = require('riot');
var immutable = require('immutable');
var _ = require('underscore');

// views
require('./tags/controls/textbox.tag');
require('./tags/equity-item.tag');
require('./tags/equity-list.tag');
require('./tags/pages/equity-page.tag');

var al = [
	{
		id: 1,
		desc: "Salary (50% gross)",
		value: 1510.42,
		date: "10/31/2014"
	},
	{
		id: 1,
		desc: "Salary (50% gross)",
		value: 1510.42,
		date: "11/14/2014"
	}
];

riot.mount('*', {
	m: al
});

window.al = al;
