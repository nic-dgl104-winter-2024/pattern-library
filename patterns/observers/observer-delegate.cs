// Generic Delegate Implementation of the Observer Pattern

/*
References used: 
https://www.youtube.com/watch?v=yoAOo4dM2pk
https://www.c-sharpcorner.com/article/design-pattern-with-net-delegates/
https://www.devleader.ca/2023/11/17/examples-of-the-observer-pattern-in-c-how-to-simplify-event-management/#google_vignette
https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/how-to-subscribe-to-and-unsubscribe-from-events
*/

using System;

// Define the generic delegate for the event handler
// The EventHandler<T> delegate represents a method that takes a parameter of type T and returns void
// It is used to define the signature of event handlers for events associated with the Subject<T> class
public delegate void EventHandler<T>(T data);

// Define the Observer interface
public interface IObserver<T>
{
    void Update(T data);
}

// Define the Subject class
public class Subject<T>
{
    // Event 'DataChanged' to which observers can subscribe
    // 'DataChanged' uses the EventHandler<T> delegate as its type
    public event EventHandler<T> DataChanged;
    
    // Method to subscribe an observer to the subject
    public void Subscribe(IObserver<T> observer)
    {
        DataChanged += observer.Update; // Add the observer's Update method to the event 
    }
    
    // Method to unsubscribe an observer from the subject
    public void Unsubscribe(IObserver<T> observer)
    {
        DataChanged -= observer.Update; // Remove the observer's Update method from the event
    }
    
    // Method to notify observers when state of the subject changes
    public void Notify(T data)
    {
        // Checks if 'DataChanged' is not null before attempting to invoke it
        // Invoke each observer's Update method with the provided data
        DataChanged?.Invoke(data);
    }
}

// Define an example data class
public class Data
{
    public string Message { get; set; }
}

// Implements the Observer Interface
public class ConcreteObserver : IObserver<Data>
{
    private string name;
    
    // Constructor to initialize the observer with a name
    public ConcreteObserver(string name)
    {
        this.name = name;
    }

    // Update(Data data) serves as an event handler
    // It handles the event when the state of the Subject changes
    public void Update(Data data)
    {
        Console.WriteLine($"{name} received message: {data.Message}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create subject
        Subject<Data> subject = new Subject<Data>(); 

        // Create observers
        IObserver<Data> observer1 = new ConcreteObserver("Observer 1");
        IObserver<Data> observer2 = new ConcreteObserver("Observer 2");

        // Subscribe observers to the subject
        subject.Subscribe(observer1);
        subject.Subscribe(observer2);

        // Notify observers of data change
        Data newData = new Data { Message = "First message" };
        subject.Notify(newData);

        // Unsubscribe observer1 from the subject
        subject.Unsubscribe(observer1);

        // Notify observers of another data change
        newData = new Data { Message = "Second message" };
        subject.Notify(newData);
    }
}