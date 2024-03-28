public class Main {
    public static void main(String[] args) {
        AbstractTemplate templateA = new ConcreteClassA();
        templateA.templateMethod();

        System.out.println();

        AbstractTemplate templateB = new ConcreteClassB();
        templateB.templateMethod();
    }
}
