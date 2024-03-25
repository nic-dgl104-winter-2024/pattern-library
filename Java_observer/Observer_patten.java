import java.util.ArrayList;
import java.util.List;

// Subject interface which store list
interface StockMarket {
    void addObserver(Investor investor);
    void removeObserver(Investor investor);
    void notifyObservers();
}

// Observer interface
interface Investor {
    void update(String stock, double price);
}

// Concrete Subject
class StockMarketImpl implements StockMarket {
    private List<Investor> investors = new ArrayList<>();
    private String stock;
    private double price;

    @Override
    public void addObserver(Investor investor) {
        investors.add(investor);
    }

    @Override
    public void removeObserver(Investor investor) {
        investors.remove(investor);
    }

    @Override
    public void notifyObservers() {
        for (Investor investor : investors) {
            investor.update(stock, price);
        }
    }

    public void setStockPrice(String stock, double price) {
        this.stock = stock;
        this.price = price;
        notifyObservers();
    }
}

// Concrete Observer
class InvestorImpl implements Investor {
    private String name;

    public InvestorImpl(String name) {
        this.name = name;
    }

    @Override
    public void update(String stock, double price) {
        System.out.println(name + " received update - " + stock + " price: " + price);
    }
}

//Main Class(Usage example)
public class Observer_patten  {
    public static void main(String[] args) {
        StockMarketImpl stockMarket = new StockMarketImpl();

        Investor investor1 = new InvestorImpl("Alice");
        Investor investor2 = new InvestorImpl("Bob");

        stockMarket.addObserver(investor1);
        stockMarket.addObserver(investor2);

        stockMarket.setStockPrice("ABC", 100.0);
    }
}