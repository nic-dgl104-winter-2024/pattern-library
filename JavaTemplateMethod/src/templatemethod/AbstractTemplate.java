/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package templatemethod;

/**
 *
 * @author Usman
 */
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