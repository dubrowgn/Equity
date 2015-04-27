// libs
var riot = require('riot');
var immutable = require('immutable');
var proxy = require('./src/proxy.js');

// views
require('./tags/controls/textbox.tag');
require('./tags/controls/datebox.tag');
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

window.al = al;
window.proxy = proxy;

var p = window.p = new proxy("http://localhost:8080");

p.send('equity-list', 'items', 1).then(function(items) {
	riot.mount('*', {
		m: items
	});
}, function(err) {
	console.dir(err);
	alert(err.message);
});