import java.util.ArrayList;
import java.util.List;

// Defines the Subject interface that allows observers to register, unregister, and be notified.
interface TicketSubject {
    void registerObserver(TicketObserver observer);

    void removeObserver(TicketObserver observer);

    void notifyObservers();
}

// Implements the TicketSubject interface to manage ticket availability and
// observers.
class TicketBookingSystem implements TicketSubject {
    private List<TicketObserver> observers; // List to hold all registered observers.
    private String ticketStatus; // Variable to track ticket status with more flexibility.

    public TicketBookingSystem() {
        observers = new ArrayList<>(); // Initialize the list of observers.
        ticketStatus = "Unavailable"; // Initially, tickets are marked as unavailable.
    }

    // Sets the ticket status and notifies all observers about the change.
    public void setTicketStatus(String status) {
        this.ticketStatus = status; // Update ticket status.
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

    // Notifies all registered observers about the ticket status.
    @Override
    public void notifyObservers() {
        for (TicketObserver observer : observers) { // Loop through each observer in the list.
            observer.update(ticketStatus); // Notify the observer with the current ticket status.
        }
    }
}

// Defines the Observer interface for receiving updates from the Subject.
interface TicketObserver {
    void update(String ticketStatus);
}

// Implements the TicketObserver interface to react to ticket status changes.
class User implements TicketObserver {
    private String name; // Holds the name of the user.

    public User(String name) {
        this.name = name; // Initializes the user with a name.
    }

    // Updates the user with the ticket status.
    @Override
    public void update(String ticketStatus) {
        if ("Available".equals(ticketStatus)) {
            System.out.println(name + ": Ticket is available! Booking ticket now.");
        } else {
            System.out.println(name + ": Tickets are " + ticketStatus + ". Waiting for next availability.");
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

        // Register observers with the subject to get ticket status updates.
        ticketBookingSystem.registerObserver(user1);
        ticketBookingSystem.registerObserver(user2);

        // Change the ticket status to simulate tickets becoming available.
        // This will notify all registered observers about the change.
        ticketBookingSystem.setTicketStatus("Available");
    }
}
