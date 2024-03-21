import Watcher from "../viewModel/Watcher.js";

export default class View {
	constructor(el, vm) {
		this.el = el;
		this.vm = vm;
		this.init();
	}

	init() {
		[].slice.call(this.el.children).forEach((node) => {
			let text = node.textContent;
			let reg = /\{\{(.*?)\}\}/;

			if (reg.test(text)) {
				let key = reg.exec(text)[1];
				this.vm.dep.add(new Watcher(this.vm, () => (node.innerText = this.vm[key])));
			}

			if (node.getAttribute("y-model")) {
				let modelKey = node.getAttribute("y-model");

				this.vm.dep.add(new Watcher(this.vm, () => (node.value = this.vm[modelKey])));
				node.removeAttribute("y-model");
			}

			if (node.getAttribute("y-click")) {
				let eventKey = node.getAttribute("y-click");

				node.addEventListener("click", this.vm[eventKey].bind(this.vm), false);

				node.removeAttribute("y-click");
			}
		});
	}
}
