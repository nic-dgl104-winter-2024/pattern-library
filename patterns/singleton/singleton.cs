public sealed class Calculations
{
    private static readonly Calculationsinstance = new Calculations();
    static Calculations()
    {
    }
    private Calculations()
    {
    }
    public static CalculationsInstance
    {
        get
        {
            return instance;
        }
    }
    // Add method for performing addition
    public int Add(int num1, int num2)
    {
        return num1 + num2;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Access the Singleton instance
        Calculations cals = Calculations.Instance;

        // Perform addition operation
        int result = cals .Add(5, 3);

        Console.WriteLine("Result of addition: " + result);
        Calculations cals1 = Calculations.Instance;
         if(cals1 == cals)
	    {
             Console.WriteLine("cals1 and cals both instances are equal");
         }
    }
}