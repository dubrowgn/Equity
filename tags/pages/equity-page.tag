<equity-page>
	<header>
		<h1><textbox value="Equity Tracker" /></h1>
	</header>
	<div class="content">
		<section>
			<h2>Transactions <i class="fa fa-plus btn add" title="Create new transaction" onclick={ add }></i></h2>
			<equity-list items={ opts.m } />
		</section>
		<section>
			<div class="total">Total: --</div>
		</section>
	</div>
	<footer>
		<p>© 2015</p>
	</footer>

	add() {
		p.send('equity-item', 'new', 1);
	};
</equity-page>