/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package templatemethod;

/**
 *
 * @author Usman
 */
public class ConcreteClassA extends AbstractTemplate {
    @Override
    protected void stepOne() {
        System.out.println("ConcreteClassA: Step One");
    }

    @Override
    protected void stepTwo() {
        System.out.println("ConcreteClassA: Step Two");
    }

    @Override
    protected void stepThree() {
        System.out.println("ConcreteClassA: Step Three");
    }

    @Override
    protected boolean isExtraStepRequired() {
        return true;
    }

    @Override
    protected void extraStep() {
        System.out.println("ConcreteClassA: Performing extra step");
    }
}