import Observer from "./Observer.js";
import Dep from "./Dep.js";
import View from "../view/View.js";

export default class Mvvm {
	constructor(options) {
		this.$options = options;
		const el = document.querySelector(this.$options.el);

		this._data = this.$options.data;

		new Observer(this._data, this);

		this.dep = new Dep();

		const vm = new Proxy(this, {
			get(target, propKey) {
				return Reflect.get(Reflect.has(target, propKey) ? target : Reflect.has(target._data, propKey) ? target._data : target.$options.methods, propKey);
			},
			set(target, propkey, value) {
				Reflect.set(target._data, propkey, value);
				target.dep.notify();
				return true;
			},
		});

		new View(el, vm);
	}
}
