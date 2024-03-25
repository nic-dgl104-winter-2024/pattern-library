
import java.util.ArrayList;
import java.util.List;

// Subject interface which store value of list
interface Subject {
    void addObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Observer interface
interface Observer {
    void update();
}

// Concrete Subject
class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();

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
            observer.update();
        }
    }

    // Additional methods and state for the subject can be added here
}

// Concrete Observer
class ConcreteObserver implements Observer {
    private String name;

    public ConcreteObserver(String name) {
        this.name = name;
    }

    @Override
    public void update() {
        System.out.println(name + " received update from the subject.");
    }
}

// Main class
public class Observer_patten {
    public static void main(String[] args) {
        // Creating a concrete subject
        ConcreteSubject subject = new ConcreteSubject();

        // Creating concrete observers
        ConcreteObserver observer1 = new ConcreteObserver("Observer 1");
        ConcreteObserver observer2 = new ConcreteObserver("Observer 2");

        // Adding observers to the subject
        subject.addObserver(observer1);
        subject.addObserver(observer2);

        // Notifying observers
        subject.notifyObservers();
    }
}