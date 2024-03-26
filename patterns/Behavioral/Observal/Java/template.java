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