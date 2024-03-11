/**
 * Singleton class: Lazy Initialization
 *
 * @class
 * @returns {AlertDialog} The AlertDialog class instance.
 */

class AlertDialog {
	static instance;
	constructor() {
		this.message = "";
		this.domElement = null;
	}
	static get instance() {
		if (!AlertDialog.instance) {
			AlertDialog.instance = new AlertDialog();
		}
		// returns static instance to ensure it only create instance when it is needed.
		return AlertDialog.instance;
	}

	show(message) {
		this.create(message);
		this.domElement.style.display = "block";
	}

	create(message) {
		if (!this.domElement) {
			this.domElement = document.createElement("div");
			this.domElement.className = "alert-message";
			this.domElement.textContent = message;
			document.body.appendChild(this.domElement);
		}
		return this.domElement;
	}
}
const alertDialog = AlertDialog.instance;
const alertDialog2 = AlertDialog.instance;

document.body.addEventListener("click", function () {
	alertDialog.show("You make it");
	console.log(alertDialog === alertDialog2);
	// output: true
});
