package patterns.Behavioral.Observal.Java;

abstract class DataProcessor {

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

    abstract void processData();

}

class FileDataProcessor extends DataProcessor {

    private String fileName;

    public FileDataProcessor(String fileName) {
        this.fileName = fileName;
    }

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
        DataProcessor fileProcessor = new FileDataProcessor("data.txt");
        System.out.println("Processing file data");
        fileProcessor.process();

        System.out.println("\nProcessing database data:");
        DataProcessor databaseProcessor = new DatabaseDataProcessor("my_database");
        databaseProcessor.process();
    }
}