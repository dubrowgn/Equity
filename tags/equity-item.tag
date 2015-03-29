<equity-item>
	<div class="equity-item deposit">
		<div class="field type"><div class="textbox"><i class="fa fa-square"></i></div></div>
		<div class="field description"><textbox value={ item.desc } oncommit={ commit } onmodify={ modify } /></div>
		<div class="field value"><textbox value={ '$' + item.value.toFixed(2) } /></div>
		<div class="field date"><textbox value={ item.date } /></div>
		<div class="field delete"><div class="textbox"><i class="fa fa-trash-o btn-trash"></i></div></div>
	</div>

	var item = this.item = opts.item;

	commit(value) {
		console.log("action.commit: " + value);
	};
	modify(value) {
		console.log("action.modify: " + value);
	}
</equity-item>