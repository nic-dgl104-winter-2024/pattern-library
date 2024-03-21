
/* Because of Dart's use of factory constructers, it's easy to make an simpleton application in 

Dart, and is quite easy to implement, look at my coresponding  read.me file for more information 

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