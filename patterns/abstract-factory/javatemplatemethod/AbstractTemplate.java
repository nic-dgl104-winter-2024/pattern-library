public abstract class AbstractTemplate {
    // Template method
    public void templateMethod() {
        stepOne();
        stepTwo();
        stepThree();
        if (isExtraStepRequired()) {
            extraStep();
        }
    }

    // Abstract methods to be implemented by subclasses
    protected abstract void stepOne();
    protected abstract void stepTwo();
    protected abstract void stepThree();

    // Hook method
    protected boolean isExtraStepRequired() {
        return false;
    }

    // Optional hook method
    protected void extraStep() {
        System.out.println("Optional extra step performed.");
    }
}
