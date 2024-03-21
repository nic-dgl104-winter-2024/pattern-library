import Mvvm from "./viewModel/mvvm.js";

/*
This is MVVM example the whole concepts is base on VUE framework : https://github.com/vuejs
As simple as it can be 🙇, this MVVM pattern doesn't include any optimizations on its steps. There are potential problems:

👉 In scenarios of extensive data changes, the current implementation might face performance issues due to triggering updates for all associated Watchers with each data alteration.
👉 The regular expression used to parse the double curly braces {{}} in the HTML template is not very robust.
👉 The current implementation only supports simple data binding and click event binding.
However, our main focus here is to present the idea of MVVM, enjoy the process!😁
*/

export default new Mvvm({
	el: "#mvvm",
	data: {
		number: 0,
	},
	methods: {
		addNumber() {
			this.number++;
		},
		minusNumber() {
			if (this.number === 0) return;
			this.number--;
		},
	},
});
