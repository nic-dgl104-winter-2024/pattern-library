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