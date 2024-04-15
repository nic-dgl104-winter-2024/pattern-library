
 // Reference from external resources
 // https://www.c-sharpcorner.com/UploadFile/8911c4/singleton-design-pattern-in-C-Sharp/
 // https://csharpindepth.com/articles/Singleton
 
using System;


public sealed class Calculations
{
    // Singleton instance creation
    private static readonly Calculations Calculationsinstance = new Calculations();

    // Static constructor
    static Calculations()
    {
    }

    // Private constructor
    private Calculations()
    {
    }

    // Static property to access the singleton instance
    public static Calculations CalculationsInstance
    {
        get
        {
            // Return the static readonly instance of Calculations.
            // This property is used to get the singleton instance from outside the class.
            return Calculationsinstance;
        }
    }
    // Add method for performing addition
    public int Add(int num1, int num2)
    {
        // Simple method to add two numbers.
        return num1 + num2;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Access the Singleton instance
        Calculations calObjectA = Calculations.CalculationsInstance;

        // Perform addition operation
        int result = calObjectA .Add(5, 3);

        Console.WriteLine("Result of addition: " + result);

        // Attempting to create another instance of Calculations using the static property
        Calculations calObjectB = Calculations.CalculationsInstance;

        // Check if both instances are equal
         if(calObjectA == calObjectB)
	    {
             Console.WriteLine("calObjectA and calObjectB both instances are equal");
         }
    }
}
