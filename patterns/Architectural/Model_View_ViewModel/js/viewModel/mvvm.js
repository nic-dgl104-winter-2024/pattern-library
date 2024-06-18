import Observer from "./observer.js";
import Dep from "./dep.js";
import View from "../view.js";

/*
 * MVVM (Model-View-ViewModel) implementation
 * This class represents the core MVVM architecture, integrating data, views, and user interaction.
 */
export default class Mvvm {
    constructor(options) {
        this.$options = options;
        const el = document.querySelector(this.$options.el);

        // Initialize data
        this._data = this.$options.data;

        // Observe data changes
        new Observer(this._data, this);

        // Create a dependency tracker
        this.dep = new Dep();

        // Proxy for handling data access and updates
        const vm = new Proxy(this, {
            get(target, propKey) {
                // Check if the property exists in the target or data object, or in methods
                return Reflect.get(
                    Reflect.has(target, propKey) ? target :
                    Reflect.has(target._data, propKey) ? target._data :
                    target.$options.methods, propKey);
            },
            set(target, propkey, value) {
                // Set the property value and notify dependents
                Reflect.set(target._data, propkey, value);
                target.dep.notify();
                return true;
            },
        });

        // Initialize the view
        new View(el, vm);
    }
}
