# DGL 104 Pattern Library
A multi-language library containing implementations of common software design and architecture patterns 



## Documentation Table of Contents
- [Observer Pattern Definition](#observer-pattern)
- [Singleton Pattern Definition](#singleton-pattern)

## Library Table of Contents

### [Creational Patterns](Kaia-pattern-library-main/patterns/Architectual)

#### [Singleton](Kaia-pattern-library-main/patterns/Creational/singleton)
- [JavaScript](Kaia-pattern-library-main/patterns/Creational/singleton/JavaScript)
- [ReactNative](Kaia-pattern-library-main/patterns/Creational/singleton/Kotlin)
- [Kotlin](Kaia-pattern-library-main/patterns/Creational/singleton/Kotlin)
- [Dart](Kaia-pattern-library-main/patterns/Creational/singleton/Dart)
- [Lua](Kaia-pattern-library-main/patterns/Creational/singleton/Lua)

### [Behavioral Patterns](Kaia-pattern-library-main/patterns/Behavioral)

####  [Observer](Kaia-pattern-library-main/patterns/Behavioral/Observal)
- [JavaScript](Kaia-pattern-library-main/patterns/Behavioral/Observal/JavaScript)
- [ReactNative](Kaia-pattern-library-main/patterns/Behavioral/Observal/React Native)
- [Kotlin](Kaia-pattern-library-main/patterns/Behavioral/Observal/Kotlin)
- [Dart](Kaia-pattern-library-main/patterns/Behavioral/Observal/Dart)
- [Lua](Kaia-pattern-library-main/patterns/Behavioral/Observal/Lua)

### [Architectual Patterns](Kaia-pattern-library-main/patterns/Architectual)

- [Model View ViewModel](Kaia-pattern-library-main/patterns/Architectual/Model View ViewModel (MVVM))
- [Model View Controller](Kaia-pattern-library-main/patterns/Architectual/Model View Controller (MVC)




<a id="observer-pattern"></a>

### Definition of Observer Pattern

The observer pattern is a behavioral design pattern often used in software development. 

The purpose of the observer pattern is to establish a one-to-many dependency between objects. An object known as the subject maintains a list of it's dependents, called observers. The subject automatically notifies these observers of any state changes it undergoes, typically achieved by invoking one of their methods.

This pattern is often employed in software systems to ensure consistency among multiple components or to notify interested parties about specific events.

As an example, consider a scenario using the analogy of a publisher/subscriber relationship. In this analogy, the publisher acts as the subject, while the subscribers represent the observers. Whenever a significant event occurs to the publisher, it notifies the subscribers by invoking specific notification methods on their objects. This process ensures that subscribers are quickly informed of important updates.

#### References

Design Patterns and Refactoring. (n.d.). Sourcemaking.com. https://sourcemaking.com/design_patterns/observer

Refactoring Guru. (2014). Observer. Refactoring.guru. https://refactoring.guru/design-patterns/observer

Observer pattern. (2022, November 13). Wikipedia. https://en.wikipedia.org/wiki/Observer_pattern#:~:text=In%20software%20design%20and%20engineering


<a id="#singleton-pattern"></a> 

### Definition of Singelton Pattern

#### References


## Functional Patterns vs. OOP Design Patterns in JavaScript

### Introduction: 

In traditional Object-Oriented Programming (OOP), design patterns are widely used to solve common problems by providing structured approaches to design and development. However, with the rise of Functional Programming (FP), there's a shift towards different paradigms and patterns. In this Section, we'll explore the contrast between OOP design patterns and functional patterns in JavaScript.

### OOP Design Patterns
OOP design patterns like Singleton, Factory, Observer, and others are well-established concepts in JavaScript development. They focus on class hierarchies, encapsulation, and inheritance to achieve modularity and extensibility.

For example, the Singleton pattern ensures that a class has only one instance and provides a global point of access to it. In JavaScript:

```
This example is taken from this repository's Singleton JS code.

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
```

### Functional Patterns
Functional programming emphasizes immutable data and pure functions without side effects. While traditional OOP design patterns may not directly translate, functional programming offers its own set of patterns to address similar concerns.

One common pattern in FP is the Higher-Order Function pattern. Higher-order functions take other functions as arguments or return them, enabling composition and abstraction.

```
// Example of map, a higher-order function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```


### Contrast and Comparison
**Immutability:** FP favors immutable data, reducing the risk of unintended state changes. OOP, while supporting immutability, often relies on mutable state within objects.

**Composition vs. Inheritance:** Functional programming encourages composition over inheritance. Instead of relying on class hierarchies, functions are composed to achieve complex behaviors.

**Pattern Matching:** FP languages like Haskell or Scala offer pattern matching, allowing elegant handling of different cases. This contrasts with traditional switch-case or if-else statements in OOP.

### Conclusion
While OOP design patterns are specific to class-based systems, functional programming offers alternative patterns that address similar concerns. Functional patterns emphasize immutability, higher-order functions, and composition, leading to concise and expressive code. While the transition from OOP to FP may require a mindset shift, understanding both paradigms equips developers with a broader toolkit for solving problems.

### References

* [javascript-functional-programming-vs-oop](https://anywhere.epam.com/en/blog/javascript-functional-programming-vs-oop)
* [Comparing Dessign Pattern in OO and Functional (With Javascript Examples)](https://medium.com/@denniswalangadi/comparing-dessign-pattern-in-oo-and-functional-with-javascript-examples-b883c61e7009)
* [singleton-pattern](https://www.patterns.dev/vanilla/singleton-pattern/)
* [functional-programming-javascript](https://www.toptal.com/javascript/functional-programming-javascript)

## Articles / Websites



## Contributions 

