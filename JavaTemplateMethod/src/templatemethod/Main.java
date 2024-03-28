/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Usman
 */
package templatemethod;

public class Main {
    public static void main(String[] args) {
        AbstractTemplate templateA = new ConcreteClassA();
        templateA.templateMethod();

        System.out.println();

        AbstractTemplate templateB = new ConcreteClassB();
        templateB.templateMethod();
    }
}
