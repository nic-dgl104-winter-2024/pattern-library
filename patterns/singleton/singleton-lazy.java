/**
 * DESIGN PATTERN:
 * Singleton
 * 
 * DESCRIPTION:
 * This class represents a singleton object that is lazily initialized.
 * It ensures that only one instance of the class is created and provides a global point of access to it.
 * 
 * REFERENCES:
 * https://refactoring.guru/design-patterns/singleton
 * https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples
 */

package patterns.singleton;

class Singleton {
    // Declare a private static instance of the class.
    private static Singleton instance = null;

    // Make the constructor private so that this class cannot be instantiated
    private Singleton(){}
    
    // Provide a public method That returns the singleton instance. 
    //If the instance is not yet created, it creates a new instance and returns it.
    public static Singleton getInstance(){
        if(instance == null){
            instance = new Singleton();
        }
        return instance;
    }
}

/**
 * USAGE EXAMPLE:
 * In this example, we demonstrate the usage of the Singleton class by calling the `getInstance()` method twice.
 * We then compare the two instances to check if they point to the same object in memory.
 */

public class Main {
    public static void main(String[] args) {
        Singleton instance1 = Singleton.getInstance();

        Singleton instance2 = Singleton.getInstance();

        System.out.println(instance1 == instance2);
        // Output: true
    }
}