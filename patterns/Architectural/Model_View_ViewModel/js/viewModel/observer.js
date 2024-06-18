import Dep from "./dep.js";

export default class Observer {
	constructor(data, vm) {
		this.dep = new Dep();

		vm._data = new Proxy(data, {
			get: function (target, propkey) {
				return Reflect.get(target, propkey);
			},
			set: (target, propkey, value) => {
				if (target[propkey] === value) return true;
				Reflect.set(target, propkey, value);
				this.dep.notify();
				return true;
			},
		});
	}
}
