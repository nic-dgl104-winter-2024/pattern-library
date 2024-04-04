import java.util.ArrayList;
import java.util.List;

// Subject interface
interface Subject {
    void addObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Concrete Subject
class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private int state;

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
        notifyObservers(); // Notify observers whenever the state changes
    }

    @Override
    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(this); // Pass the subject reference to the observer
        }
    }
}

// Observer interface
interface Observer {
    void update(Subject subject); // Pass the subject reference to the update method
}

// Concrete Observer
class ConcreteObserver implements Observer {
    @Override
    public void update() {
        // Implement the update logic here
        System.out.println("Observer updated.");
    }
}

public class Main {

    public static void main(String[] args) {
        ConcreteSubject subject = new ConcreteSubject();
        ConcreteObserver observer1 = new ConcreteObserver();
        ConcreteObserver observer2 = new ConcreteObserver();

        subject.addObserver(observer1);
        subject.addObserver(observer2);

        subject.setState(1);

        subject.removeObserver(observer1);

        subject.setState(2);
    }
}
