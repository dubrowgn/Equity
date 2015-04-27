var controllers = Object.create(null);

module.exports = function(name, controller) {
	name = name.toLowerCase();

	if (!controller)
		return controllers[name];

	console.log('loading controller ' + name);
	return controllers[name] = controller;
};