/**
 * Singleton class: Lazy Initialization
 * 
 * This class represents a singleton object that is lazily initialized. It ensures that only one instance of the class
 * is created and provides a global point of access to it.
 * 
 */

package patterns.singleton;

class Singleton {
    // Declare a private static instance of the class.
    private static Singleton instance = null;

    // Make the constructor private so that this class cannot be instantiated
    private Singleton(){}
    
    // Provide a public method That returns the singleton instance. If the instance is not yet created, it creates a new instance and returns it.
    public static Singleton getInstance(){
        if(instance == null){
            instance = new Singleton();
        }
        return instance;
    }
}