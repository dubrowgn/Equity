<textbox>
	<input type="text" class="textbox" oninput={ input } onblur={ blur } onkeyup={ keypress } value={ v } />
	<div class="textbox w-sizer">{v}</div>

	this.v = opts.value;

	blur(e) {
		if (this.opts.onblur)
			this.opts.onblur(e);

		this.commit();

		return true;
	};

	commit() {
		if (this.opts.oncommit)
			this.opts.oncommit(this.v);
	};

	input(e) {
		if (this.opts.oninput)
			this.opts.oninput(e);

		this.v = e.target.value;

		if (this.opts.onmodify)
			this.opts.onmodify(this.v);
	};

	keypress(e) {
		if (this.opts.onkeyup)
			this.opts.onkeyup(e);

		if (e.keyCode === 13)
			this.commit();

		return true;
	};
</textbox>