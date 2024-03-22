# ✨ Singleton Design Pattern 

/* TODO: Using this as an base-line, redesign this document to use psuedo code and be generic across all languges */

Sun or moon no matter how many time we see them, they are always the same one. A similar concept can be applied to the Singleton Pattern—a design pattern that ensures the creation of only one instance of an object in memory.

## Potential Issues with the Pattern

- Singleton pattern can potentially violate SOLID principles

- The global nature of the pattern may lead to name conflicts

  

## 📦 Use cases

- Modal

​       For the login dialog, regardless of how many times we call it, it should 	consistently return the same instance.

-  Window Object

​	Remeber how we use [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) containg DOM? It implement and create 	same instance for us.This ensures that there is a single, consistent 	point of access to the DOM across the entire web page. 

- Global state magement

​	As global state management involves sharing data across the entire 	application, it's crucial to ensure that the instance is instantiated only 	once. This guarantee ensures persistent access to shared data across 	different components and modules of the application.



## 👩‍💻 Implement

### Basic example

```javascript
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
```


### Advance example - Lazy version

Assuming we need to call a modal many times, and the only different between them is just text. To enchange performance, we can utilize singleton pattern. 

Lazy version looks really similar to basic one. However, notices that code has been moved and is executed in a static context and does not depend on an instance. Moreover, instead of returning  `this` in constructor , lazy vesrion returns  `static instance`  to ensure it only create instance when it is needed.In other words, the core concept of lazy singleton design is to defer the creation of an instance until it is needed, as opposed to creating it immediately at the start.

```javascript
class AlertDialog {
  static instance;
	constructor() {
		this.message = "";
		this.domElement = null;
	}
  static getInstance() {
		if (!AlertDialog.instance) {
			AlertDialog.instance = new AlertDialog();
		}
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
const alertDialog =  AlertDialog.getInstance();
const alertDialog2 = AlertDialog.getInstance();

document.body.addEventListener("click", function () {
	alertDialog.show("You make it");
	console.log(alertDialog === alertDialog2);
	// output: true
});
```


### General Method

Base on above concepts, we can create a method for the specific function we want it only instantiate once

```javascript
const getSingle = function(fn) {
	let result = 'initial_single';
		return function() {
			return result || (result = fn.apply(this, arguments));
	}
}
```



Because `getSingle` is solely focused on ensuring that the instance is created only once, without being responsible for the specific content of the instance.


