import Watcher from "./viewModel/watcher.js";

/*
The templateRegex provided by ChatGPT
https://chat.openai.com/
*/

export default class View {
	constructor(el, vm) {
		this.el = el;
		this.vm = vm;
		this.init();
	}

	init() {
		[].slice.call(this.el.children).forEach((node) => {
			let textContent = node.textContent;

			// sample reg to match is template include  {}
			let templateRegex = /\{\{(.*?)\}\}/;

			if (templateRegex.test(textContent)) {
				// get content within {{}}
				let key = templateRegex.exec(textContent)[1];
				this.vm.dep.add(new Watcher(this.vm, () => (node.innerText = this.vm[key])));
			}

			if (node.getAttribute("v-click")) {
				let eventKey = node.getAttribute("v-click");

				// bind event to ViewModel
				node.addEventListener("click", this.vm[eventKey].bind(this.vm), false);

				// remove the v-click attribute to make sure it's only bind once
				node.removeAttribute("v-click");
			}
		});
	}
}
