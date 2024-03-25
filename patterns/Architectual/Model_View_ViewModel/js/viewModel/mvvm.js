import Observer from "./observer.js";
import Dep from "./dep.js";
import View from "../view.js";

/*
The idea of watching data using new Proxy and Reflect is taken as a reference from:
https://github.com/vuejs/core/blob/caeb8a68811a1b0f799632582289fcf169fb673c/packages/reactivity/src/baseHandlers.ts#L129
*/

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
