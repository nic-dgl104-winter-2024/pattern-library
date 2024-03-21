export default class Watcher {
	constructor(vm, cb) {
		this.vm = vm;
		this.cb = cb;

		cb.call(vm);
	}

	update() {
		this.cb.call(this.vm);
	}
}
