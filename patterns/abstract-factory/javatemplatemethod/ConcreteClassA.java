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
