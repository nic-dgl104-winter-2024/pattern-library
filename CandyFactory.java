abstract class  CandyMaker {

    public final void makeCandy() {
        prepareIngredients();
        moldShape();
        wrapCandy();
    }
    protected abstract void prepareIngredients();
    protected abstract void moldShape();
    protected abstract void wrapCandy();
}





public class CandyFactory {
    public static void main(String[] args) {
        System.out.println("Making candy");
        
    }
}