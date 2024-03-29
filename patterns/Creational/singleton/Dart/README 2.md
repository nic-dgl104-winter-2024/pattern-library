# ✨ Dart - Singleton 


## Introduction: 

Singleton is an object-oriented programming language pattern with only one instance to provide consistency across local data storage and consistent return values when accessing the data. 

Singleton ensures that objects have only one instance, allowing for easy reference and access to the singleton class and finally helping to control the instance, such as private data, changing variables, or other run-time paradigms. 

Singleton mainly attempts to solve the problem of overusing global variables to change instance data, as they “do not pollute the global namespace _(or their containing namespace)._” [2: Wikipedia Singelton patterns.](https://en.wikipedia.org/wiki/Singleton_pattern)

Singleton also saves more internal memory than global variables since storing the variables and arithmetic across memory is much more intense and, in more extensive applications, more intensive on the CPU and the GPU.

Overall, Singelton is a simple pattern that provides an easy-to-use framework for future patterns and allows constituent return value constructors for memory allocation, easy access to the class and its corresponding methods, and overall allows for inoffensive, easy-to-understand patterns for developers to use.

### What other programming patterns are used for Dart?

Like most object-oriented languages, Dart contains many programming patterns to solve various problems; the following programs can then be separated into several categories. 

#### Creational Patterns: 

Creational patterns are patterns that provide various object-creation mechanisms, which can improve flexibility while writing code and allow code reuse or optimization [6: Refactoring Guru: Behavioral Patterns](https://refactoring.guru/design-patterns/behavioral-patterns). Usually, they attempt to fulfill a common programming problem or optimize or condense certain aspects of development, such as frequent re-use of objects, global variables, or other problems 

Singleton is a Creational Pattern that ensures a class provides only one instance while allowing global access to that instance, methods, and constructors; it mainly solves the [11: “Single Responsibility Principle”](https://www.cleancode.studio/design-patterns/single-responsibility-design-pattern)  problem while also providing global access points that can help organize and find code. 

#### Structural Patterns:

_“Structural patterns are design patterns that deal with the composition and organization of classes and objects. They help you define how different components of your system interact and relate to each other.”_ [10: Linked-In "What is the difference between a structural pattern and a behavioral pattern?"](https://www.linkedin.com/advice/0/what-difference-between-structural-pattern-behavioral-nkg2c#:~:text=Behavioral%20patterns%20can%20improve%20your,%2C%20Template%20Method%2C%20and%20Visitor.)


#### Behavioral Patterns: 

_“Behavioral patterns are design patterns that deal with the communication and cooperation of classes and objects. They help you define how different components of your system behave and respond to each other.”_ [10: Linked-In "What is the difference between a structural pattern and a behavioral pattern?"](https://www.linkedin.com/advice/0/what-difference-between-structural-pattern-behavioral-nkg2c#:~:text=Behavioral%20patterns%20can%20improve%20your,%2C%20Template%20Method%2C%20and%20Visitor.)

 
### Why use the singleton pattern in Dart? 

Singleton is exceptionally easy to implement and uses a creational pattern. A good use of the Singleton pattern inside Dart would be _“One of the powerhouse advantages of implementing a Dart Singleton is the control over resource consumption. Often, creating many instances consumes many resources, pressing a need for a design pattern where only one instance is created, and the same instance is shared with every class requesting it”_ [2] 

As described earlier in this Library, Singleton mainly focuses on the coding problem of recurring global variables and memory. However, we have yet to describe in detail how the implementation of Singleton will be used; therefore, let us look more at the structural context before we provide code examples.  

## Implementation

Singelton is relatively simple to implement in Dart, mainly due to the implementation of Dart’s factory constructors [11]. Factory constructors are pre-fixed with the factory keyword. Factory Constructors work as class instructors. However, factory constructors do not always create new instances of a class unless further defined. 

This allows the Singleton class to allow both an instance of cache or an instance of a sub-type if declared and to initialize final (Const) variables that cannot be installed due to being assigned through parameters. 

###Singelton Implementation in Dart

```Dart
/* Because of Dart's use of factory constructers, it's easy to make an simpleton application in 

Dart, and is quite easy to implement, look at the corresponding  read.me file for more information 

Coded with help from: https://dart.dev/language/constructors#factory-constructors, https://flutterbyexample.com/lesson/singletons, https://www.dhiwise.com/post/enriching-flutter-architecture-dart-singleton
    https://dart.dev/language/operators and near the end, I used ChatGPT to debug, since I may have over-enginnered my example. "https://chat.openai.com/share/aefc62d3-3566-4b1b-baa7-5e6624f4600f"  */


class Singleton {
  // Private constructor to be used for future variable instantiations
  Singleton._();

  // Static instance variable used later for factory constructor
  static Singleton? _instance_twins;

  // Factory constructor ensures only one instance is created
  factory Singleton() {
    // Creates the instance if it doesn't exist
    _instance_twins ??= Singleton._();
    return _instance_twins!;
  }

  // Example function to print a message
  void printExample() {
    print("Singleton example, print example\n");
  }
}

void main() {
  // Creates the first object instance and prints
  Singleton singleton1 = Singleton();
  singleton1.printExample();

  // Tries to create another object instance and prints
  Singleton singleton2 = Singleton();
  singleton2.printExample();

  // Checking if both variables reference the same instance
  print(identical(singleton1, singleton2)); // Should return true
}
```

### Lazy Implementation for dart

The main problem with the earlier singleton example (Besides it being over-engineered by an inexperienced dart programmer who used too many sources  as a reference and attempted to fix problems that did not need fixing is that the following code always initializes for the client, even if the client is not currently using the class or features, which is a significant problem regarding memory leakage, and memory optimization for a garbage collecting language such as Dart, 

Here is some code that shows a lazy implementation, that being some simpleton code that doesn't initialize unless called directly: 

```Dart
/*  Lazy Implemenation of Singleton: 
  The main problem with the basic implmentation of the singleton, is that it has the draw-back of being created client-side
  even if the client is not using it, While this is some-what shown in my basic example, It got an tad complex doing it free-hand 
  Therefore I'll give an slightly edited version (So it can run) of Kishore Purohit's Singleton in Dart: (Refrence down below) 
  Code example, and provide how it works in my Read.Me 

  Refrences Used: https://stackoverflow.com/questions/59459976/lazy-singleton-vs-singleton-in-dart, https://medium.com/@kishore_p18/singleton-in-dart-2c4f63c2b60c
  alongside https://www.educative.io/answers/what-is-the-late-keyword-in-dart#:~:text=In%20Dart%2C%20we%20use%20the,we%20use%20the%20late%20keyword, https://stackoverflow.com/questions/68965626/why-do-we-need-to-add-late-modifier-while-declaring-the-variables/68965815
  and https://stackoverflow.com/questions/69312956/flutter-late-keyword-with-declaration#:~:text=when%20you%20add%20late%20before,first%20it%20will%20be%20used.&text=Scenario%202-,late%20String%20name%3B,instance%20field%20must%20be%20initialized.
  As Well as the previous sources used earlier
*/

class LazyInitializedSingleton{
    /* Late (KeyWord) Ensures that will be inistalized later, I.e making them non-nullable as they are declared
        After decleration */
    static late LazyInitializedSingleton _instance;
    // Refrence that is used later in internal memory in order to create the instance when called
    LazyInitializedSingleton._internal();


    /* Declares, and Inistalizes the instase when called. Instead of automatically being delcared, instead of the basic
      implmentation which is always created, and in my instance, makes sure there is no duplicates created. */

    static LazyInitializedSingleton getInstance(){
      /* Checks to make sure that the instilastion variable exisits in memory, Late makes it non-nullable, so 
        This will never run, so it will always return false in the instance, however not using late gives 
          an Null-pointer exception, it will always return the Instance, instead, to fix this you chould use

          _instance ??= LazyInitializedSingleton._internal(); so that it is assigned only if the righthand side, only if 
          the left side is null, This is mainly used when reffering to the article. */

      if(_instance == null){
        _instance = LazyInitializedSingleton._internal();
      }
      /* Returns the static late LazyInitializedSingleton _instance; if using the previous thing below, 
      it whould return the Internal instance */
      
      return _instance;
  }
}
```

## Conclusion: 

Overall, Singleton is an easy and practical design pattern for both dart and object-oriented programming as a whole; using factory constructors, it is easy to implement the simpleton design pattern in Dart and use it throughout the project, while it does come with its own set of shortcomings, Singleton is a valuable design pattern for both beginner and advanced projects when done in moderation, and we hope that you now have a further understanding of Dart and it is implementations. 


## Repositories and Documentation:

### Documentation:

[1] https://dart.dev/language 

[2] https://www.dhiwise.com/post/enriching-flutter-architecture-dart-singleton

[3] https://flutterbyexample.com/lesson/singletons

[4] https://stackoverflow.com/questions/12649573/how-do-you-build-a-singleton-in-dart

[5] https://github.com/nic-dgl104-winter-2024/pattern-library/issues/6 

[6] https://en.wikipedia.org/wiki/Singleton_pattern 

[7] https://dart.dev/language/constructors#factory-constructors

[8] https://refactoring.guru/design-patterns/creational-patterns

[9] https://refactoring.guru/design-patterns/structural-patterns

[10] https://refactoring.guru/design-patterns/behavioral-patterns
 
[11] https://www.cleancode.studio/design-patterns/single-responsibility-design-pattern


### Repositories: 

[12] https://github.com/jnhyatt/pattern/blob/master/lib/pattern.dart

[13] https://github.com/ArunPrakashG/wordpress_client

[14] https://github.com/yarn-rp/case_matcher

[15] https://github.com/IliaKhuzhakhmetov/DesignPatterns-Dart

