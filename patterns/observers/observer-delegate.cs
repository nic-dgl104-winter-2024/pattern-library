// Generic Delegate Implementation of the Observer Pattern

/*
References used: 
https://www.youtube.com/watch?v=yoAOo4dM2pk
https://www.c-sharpcorner.com/article/design-pattern-with-net-delegates/
https://www.devleader.ca/2023/11/17/examples-of-the-observer-pattern-in-c-how-to-simplify-event-management/#google_vignette
*/

using System;

// Define the generic delegate for the event handler
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
    public event EventHandler<T> DataChanged;

    // Method to notify observers when state of the subject changes
    public void Notify(T data)
    {
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

    public ConcreteObserver(string name)
    {
        this.name = name;
    }

    public void Update(Data data)
    {
        Console.WriteLine($"{name} received message: {data.Message}");
    }
}