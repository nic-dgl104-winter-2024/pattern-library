using System;

class Student
{
    // Properties of the student
    public string Name { get; set; }
    public int Age { get; set; }
    public string Grade { get; set; }

    // Private static instance variable using Lazy initialization
    private static readonly Lazy<Student> instance = new Lazy<Student>(() => new Student("Default",0,"None"));
    
    // Public static property to access the singleton instance
    public static Student Instance
    {
        get
        {
            if (!instance.IsValueCreated)
            {
                throw new InvalidOperationException("Singleton instance has not been created yet.");
            }
            return instance.Value;
        }
    }

    // Constructor
    private Student(string name, int age, string grade)  // Making private constructor to prevent instantiation from outside
    {
        Name = name;
        Age = age;
        Grade = grade;
    }

    // Method to update student details
    public void UpdateDetails(string Name, int Age, string Grade)
    {
        this.Name = Name;
        this.Age = Age;
        this.Grade = Grade;
    }

    // Method to display student details
    public void DisplayDetails()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Age: {Age}");
        Console.WriteLine($"Grade: {Grade}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Accessing the singleton instance
        Student student = Student.Instance;

        // Display original details
        Console.WriteLine("Original Details:");
        student.DisplayDetails();

        // Update student details
        student.UpdateDetails("Ravi", 30, "B");

        // Display updated details
        Console.WriteLine("\nUpdated Details:");
        student.DisplayDetails();

        /// <summary>
        ///  If user try to create the new object of student class, he will get error at the compile time
        ///  Comile time error: Student.Student(string, int, string)' is inaccessible due to its protection level
        /// </summary>
        
        // For example 

        //Student student1 = new Student("",0,""); 
        //student1.UpdateDetails("R",12,"C");
        
    }
}