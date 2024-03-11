/**
 * Singleton class
 *
 * @class
 * @returns {AlertDialog} The AlertDialog class instance.
 */

class Singleton {
	constructor() {
		if (Singleton.instance) {
			return Singleton.instance;
		}
		this.data = "This is the singleton instance.";

		// Save the instance as a static property
		Singleton.instance = this;

		return this;
	}

	getData() {
		return this.data;
	}
}

const instance1 = new Singleton();
console.log(instance1.getData());
// Output: This is the singleton instance.

const instance2 = new Singleton();
console.log(instance2.getData());
// Output: This is the singleton instance.

console.log(instance1 === instance2); // Output: true
