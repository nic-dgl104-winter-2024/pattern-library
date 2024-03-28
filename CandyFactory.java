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

class DairyMilk extends CandyMaker {

    @Override
    protected void prepareIngredients() {
        System.out.println("Preparing milk chocolate mixture for DairyMilk.");
    }
    @Override
    protected void moldShape() {
        System.out.println("Molding the milk chocolate mixture into DairyMilk shape.");
    }
    @Override
    protected void wrapCandy() {
        System.out.println("Wrapping DairyMilk with paper wrapper.");
    }
    
}

class Snickers extends CandyMaker {

    @Override
    protected void prepareIngredients() {
        System.out.println("Preparing chocolate and peanut mixture for Snickers.");
    }
    @Override
    protected void moldShape() {
        System.out.println("Molding the chocolate and peanut mixture into Snickers shape.");
    }
    @Override
    protected void wrapCandy() {
        System.out.println("Wrapping Snickers with plastic wrapper.");
    }
    
}





public class CandyFactory {
    public static void main(String[] args) {
        System.out.println("Making KitKat:");
        CandyMaker FirstKitKat = new KitKat();
        FirstKitKat.makeCandy();
        
        System.out.println("Making Diary Milk:");
        CandyMaker FirstDiaryMilk = new DairyMilk();
        FirstDiaryMilk.makeCandy();

        System.out.println("Making Snickers:");
        CandyMaker FirstSnickers = new Snickers();
        FirstSnickers.makeCandy();
    }
}