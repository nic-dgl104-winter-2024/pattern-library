/* The Template Method Pattern is a design pattern that defines a skeleton or outline of an algorithm in the superclass. The superclass provides a default implementation of the algorithm, but specific steps can be overridden by subclasses to customize behavior without altering the main structure. The superclass is typically not final, allowing for extension, and the pattern enables code reuse and flexibility in algorithm design. */

/* 
 * This in an example of a data processing program. It defines the skeleton of the algorithm and sets the 'process' method to final to prohibit changes being made to the outline. This base class is abstract class to allow for the methods to be implemented by subclasses. In this case the 'process' method is the template method and outlines the order of execution.
 */

//Add appropriate package details
package patterns.Behavioral.Observal.Java;

/*Base class is abstract to allow its methods to be implemented by subclasses*/

abstract class DataProcessor {

    // The template methods are final
    public final void process() {
        readData();
        processData();
        saveData();
    }

    private void readData() {
        System.out.println("Reading from a data Source");
    }

    private void saveData() {
        System.out.println("Save the processed data");
    }

    // The abstract method to be implemented by subclasses
    abstract void processData();

}

/* The subclass 'FileDataProcessor' provide their own implementations of the 'processData()' method. Each tailered to handle data from their individual data source. When 'process()' is called on an instance of 'fileDataProcessor' it executes the steps in the template method. Utilizing the concrete implementations provided by the subclasses. */

class FileDataProcessor extends DataProcessor {

    private String fileName;

    public FileDataProcessor(String fileName) {
        this.fileName = fileName;
    }

    // Here override indicates that the method is overriding the processData()
    // method in the DataProcessor class.
    @Override
    void processData() {
        System.out.println("Processing data from file: " + fileName);
    }
}

class DatabaseDataProcessor extends DataProcessor {

    private String databaseName;

    public DatabaseDataProcessor(String databaseName) {
        this.databaseName = databaseName;
    }

    @Override
    void processData() {
        System.out.println("Processing Data from database: " + databaseName);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an instance of FileDataProcessor
        DataProcessor fileProcessor = new FileDataProcessor("data.txt");
        System.out.println("Processing file data");
        // Call the process() method for file data processing.
        fileProcessor.process();

        System.out.println("\nProcessing database data:");
        DataProcessor databaseProcessor = new DatabaseDataProcessor("my_database");
        databaseProcessor.process();
    }
}