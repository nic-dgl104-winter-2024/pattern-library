using System;
using System.Collections.Generic;

// Subject interface
public interface ISubject
{
    void Attach(IObserver observer);
    void Detach(IObserver observer);
    void Notify();
}

// Observer interface
public interface IObserver
{
    void Update(int number);
}
// Concrete subject
public class NumberAggregator : ISubject
{
    private List<int> numbers = new List<int>();
    private List<IObserver> observers = new List<IObserver>();

    public void Attach(IObserver observer)
    {
        observers.Add(observer);
    }

    public void Detach(IObserver observer)
    {
        observers.Remove(observer);
    }

    public void Notify()
    {
        foreach (var observer in observers)
        {
            observer.Update(numbers[numbers.Count - 1]);
        }
    }

    public void AddNumber(int number)
    {
        numbers.Add(number);
        Notify(); // Notify observers about the change
    }

    public double CalculateAverage()
    {
        if (numbers.Count == 0)
            return 0;

        int sum = 0;
        foreach (var num in numbers)
        {
            sum += num;
        }

        return (double)sum / numbers.Count;
    }
}

// Concrete observer
public class AverageDisplay : IObserver
{
    private NumberAggregator aggregator;

    public AverageDisplay(NumberAggregator aggregator)
    {
        this.aggregator = aggregator;
        aggregator.Attach(this);
    }

    public void Update(int number)
    {
        Console.WriteLine("Updated average: " + aggregator.CalculateAverage());
    }
}