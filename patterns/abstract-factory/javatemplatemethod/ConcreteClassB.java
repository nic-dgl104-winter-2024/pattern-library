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
