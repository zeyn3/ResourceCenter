

// var a = "{{levels|escapejs}}";
// var a = JSON.parse(document.getElementById('levels_from_context').textContent);

// console.log(a)

function flushLevels() {
	console.log("-----------------------------------")
	let select_levels = document.getElementById('levels');
	console.log(select_levels.options.length);

	console.log(select_levels.options[0])
	console.log(select_levels.options[1])
	// console.log(select_levels.options[2])

	if (select_levels.options.length > 1) {
		console.log("More than 1");
		console.log("FlushingAllLevels");
		for(let i = select_levels.options.length - 1; i >= 0; i--) {
			select_levels.options[i] = null;
			// select_levels.remove(i);
			console.log("Flushing ... ", i);
		};
		console.log("Flushed:", select_levels.options.length)
	}

}

function generateLevels() {
	flushLevels()
	let levels_options = [];
	alert("GeneratingLevels");
	let lv_ctx = JSON.parse(document.getElementById('levels_from_context').textContent);
	let sel_bld = document.getElementById("building");
	let bld_id = sel_bld.options[sel_bld.selectedIndex].value;
	let bld_name = sel_bld.options[sel_bld.selectedIndex].innerHTML;
	console.log(bld_id, bld_name)
	
	let select_levels = document.getElementById('levels');
	console.log(select_levels);
	// console.log(a)
	// console.log(a.Ocean)
	// console.log(a.Ocean.length)
	

	levels_options = lv_ctx[bld_name]
	console.log(levels_options)
	const levels_length = levels_options.length
	for(let i = 0; i < levels_length; i++) {
		console.log("i", i)
		// console.log("lv_ctx.Ocean[i]:", lv_ctx.Ocean[i])
		// console.log(lv_ctx.Ocean[i])
		console.log(levels_options[i])
		let level_option_tag = document.createElement('option');
		level_option_tag.value = levels_options[i];
		level_option_tag.innerHTML = levels_options[i];
		console.log(levels_options[i])
	
		select_levels.appendChild(level_option_tag);
	}
	// fl = JSON.parse("{{ levels }}");
	// fl = {{ levels }};
	// alert("Generated")
	// console.log(fl)
	// lv = document.getElementById("level").value;
}
