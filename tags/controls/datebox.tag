<datebox>
	<textbox value={ v } oncommit={ commit } />

	var moment = require('moment');
	this.v = moment(opts.value).format(opts.format || 'MMM D, YYYY');

	commit(value) {
		if (this.opts.oncommit)
			this.opts.oncommit(moment(value).toDate());
	};
</datebox>