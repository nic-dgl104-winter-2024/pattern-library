import java.util.ArrayList;
import java.util.List;

// Defines the Subject interface that allows observers to register, unregister, and be notified.
interface TicketSubject {
    void registerObserver(TicketObserver observer);
    void removeObserver(TicketObserver observer);
    void notifyObservers();
}

// Implements the TicketSubject interface to manage ticket availability and observers.
class TicketBookingSystem implements TicketSubject {
    private List<TicketObserver> observers; // List to hold all registered observers.
    private boolean ticketAvailable; // Flag to track ticket availability status.

    public TicketBookingSystem() {
        observers = new ArrayList<>(); // Initialize the list of observers.
        ticketAvailable = false; // Initially, tickets are not available.
    }

    // Sets the ticket availability and notifies all observers about the change.
    public void setTicketAvailable(boolean available) {
        this.ticketAvailable = available; // Update ticket availability status.
        notifyObservers(); // Notify all registered observers about the status change.
    }

    // Adds an observer to the list of observers.
    @Override
    public void registerObserver(TicketObserver observer) {
        observers.add(observer); // Add the observer to the list.
    }

    // Removes an observer from the list of observers.
    @Override
    public void removeObserver(TicketObserver observer) {
        observers.remove(observer); // Remove the observer from the list.
    }

    // Notifies all registered observers about the ticket availability status.
    @Override
    public void notifyObservers() {
        for (TicketObserver observer : observers) { // Loop through each observer in the list.
            observer.update(ticketAvailable); // Notify the observer with the current ticket availability status.
        }
    }
}

// Defines the Observer interface for receiving updates from the Subject.
interface TicketObserver {
    void update(boolean ticketAvailable);
}

// Implements the TicketObserver interface to react to ticket availability changes.
class User implements TicketObserver {
    private String name; // Holds the name of the user.

    public User(String name) {
        this.name = name; // Initializes the user with a name.
    }

    // Updates the user with the ticket availability status.
    @Override
    public void update(boolean ticketAvailable) {
        if (ticketAvailable) {
            System.out.println(name + ": Ticket is available! Booking ticket now.");
        } else {
            System.out.println(name + ": No tickets available. Waiting for next availability.");
        }
    }
}

// Demonstrates the usage of the Observer pattern in a ticket booking system.
public class CinemaTicketBookingExample {
    public static void main(String[] args) {
        // Create the subject (the ticket booking system).
        TicketBookingSystem ticketBookingSystem = new TicketBookingSystem();

        // Create observers (users who want to book tickets).
        User user1 = new User("Jay");
        User user2 = new User("Medrin");

        // Register observers with the subject to get ticket availability updates.
        ticketBookingSystem.registerObserver(user1);
        ticketBookingSystem.registerObserver(user2);

        // Change the ticket availability status to true to simulate tickets becoming available.
        // This will notify all registered observers about the change.
        ticketBookingSystem.setTicketAvailable(true);
    }
}
