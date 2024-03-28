/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package templatemethod;

/**
 *
 * @author Usman
 */
public class ConcreteClassB extends AbstractTemplate {
    @Override
    protected void stepOne() {
        System.out.println("ConcreteClassB: Step One");
    }

    @Override
    protected void stepTwo() {
        System.out.println("ConcreteClassB: Step Two");
    }

    @Override
    protected void stepThree() {
        System.out.println("ConcreteClassB: Step Three");
    }
}