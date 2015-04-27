<equity-item>
	<div class="equity-item deposit">
		<div class="field type"><div class="textbox"><i class="fa fa-square"></i></div></div>
		<div class="field description"><textbox value={ item.desc } oncommit={ saveDesc } /></div>
		<div class="field value"><textbox value={ '$' + item.amount.toFixed(2) } oncommit={ saveAmmount } /></div>
		<div class="field date"><datebox value={ item.date } oncommit={ saveDate } /></div>
		<div class="field delete"><div class="textbox"><i class="fa fa-trash btn trash" title="Delete transaction"></i></div></div>
	</div>

	var item = this.item = opts.item;

	commit(value) {
		console.log("action.commit: " + value);
	};
	modify(value) {
		console.log("action.modify: " + value);
	};

	patch(field, value) {
		var data = { id: item.id };
		data[field] = value;

		p.send('equity-item', 'update', data);
	};

	saveAmount(value) {
		this.patch('amount', value);
	};
	saveDesc(value) {
		this.patch('desc', value);
	};
	saveDate(value) {
		this.patch('date', value);
	};
</equity-item>