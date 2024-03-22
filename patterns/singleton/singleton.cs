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
}