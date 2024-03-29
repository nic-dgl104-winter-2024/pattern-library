// References : 
// https://www.codeproject.com/Articles/5326833/Observer-Pattern-in-Csharp
// https://refactoring.guru/design-patterns/observer/csharp/example


using System;

// HealthChangedEventArgs to pass information about the change in health
public class HealthChangedEventArgs : EventArgs
{
    public int HealthChange { get; }

    // Constructor to initialize the HealthChangedEventArgs with the health change
    public HealthChangedEventArgs(int healthChange)
    {
        HealthChange = healthChange;
    }
}

// HealthSystem class with events
public class HealthSystem
{
    private int health = 0;

    // Event declaration for health changes
    public event EventHandler<HealthChangedEventArgs> HealthChanged;

    // Constructor to initialize the health system with initial health
    public HealthSystem(int initialHealth)
    {
        health = initialHealth;
    }

    // Method to increase health
    public void IncreaseHealth(int amount)
    {
        health += amount;
        // Raise the HealthChanged event with the positive amount indicating increase
        OnHealthChanged(amount);
    }

    // Method to decrease health
    public void DecreaseHealth(int amount)
    {
        health -= amount;
        // Raise the HealthChanged event with the negative amount indicating decrease
        OnHealthChanged(-amount);
    }

    // Method to invoke the HealthChanged event
    protected virtual void OnHealthChanged(int healthChange)
    {
        // Check if there are any subscribers to the HealthChanged event and invoke them
        HealthChanged?.Invoke(this, new HealthChangedEventArgs(healthChange));
    }

    // Property to expose the current health value
    public int Health => health;
}

// HealthDisplay class to display health changes
public class HealthDisplay
{
    // Constructor to subscribe to the HealthChanged event of the provided HealthSystem instance
    public HealthDisplay(HealthSystem healthSystem)
    {
        // Subscribe to the HealthChanged event with the event handler method
        healthSystem.HealthChanged += HealthSystem_HealthChanged;
    }

    // Event handler method for health changes
    private void HealthSystem_HealthChanged(object sender, HealthChangedEventArgs e)
    {
        // Display the health change and the new health value
        Console.WriteLine($"Player health changed by {e.HealthChange}. New health: {(sender as HealthSystem).Health}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create health system
        HealthSystem healthSystem = new HealthSystem(100);

        // Create health display
        HealthDisplay healthDisplay = new HealthDisplay(healthSystem);

        // Call events (increasing/decreasing health)
        healthSystem.DecreaseHealth(20);
        healthSystem.IncreaseHealth(10);
        healthSystem.DecreaseHealth(50);

    }
}