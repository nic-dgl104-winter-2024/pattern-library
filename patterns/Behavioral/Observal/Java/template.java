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