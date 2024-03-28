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


class KitKat extends CandyMaker {

    @Override
    protected void prepareIngredients(){
        System.out.println("Preparing wafer and chocolate mixture for KitKat.");
    }
    @Override
    protected void moldShape(){
        System.out.println("Molding the wafer and chocolate mixture into KitKat shape.");
    }
    @Override
    protected void wrapCandy() {
        System.out.println("Wrapping KitKat with foil.");
    }
    
}




public class CandyFactory {
    public static void main(String[] args) {
        System.out.println("Making candy");
        
    }
}