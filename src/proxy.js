var proxy = function(endpoint) {
	this._endpoint = endpoint || proxy.endpoint;
};

proxy.endpoint = location.origin;

proxy.prototype = {
	get endpoint() {
		return this._endpoint;
	},
	send: function(item, action, data) {
		var url = this._endpoint + '/' + item + '/' + action;

		return new Promise(function(resolve, reject) {
			var req = new XMLHttpRequest();

			req.onload = function() {
				var resp = JSON.parse(this.responseText);

				if (this.status === 200)
					resolve(resp);
				else
					reject(new Error(this.statusText + ' (' + this.status + '): ' + resp.message));
			};

			req.open('POST', url, true);

			req.setRequestHeader('Accept', 'application/json');
			req.setRequestHeader('Content-Type', 'text/plain');

			req.send(JSON.stringify(data));
		});
	}
};

module.exports = proxy;