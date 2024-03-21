using System;

class Student
{
    // Properties of the student
    public string Name { get; set; }
    public int Age { get; set; }
    public string Grade { get; set; }

    // Private static instance variable using Lazy initialization
    private static readonly Lazy<Student> instance = new Lazy<Student>(() => new Student("Default",0,"None"));
    
    // Constructor
    public Student(string name, int age, string grade)
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
        // Create a new student object
        Student student = new Student("Demo", 0, "null");

        // Display original details
        Console.WriteLine("Original Details:");
        student.DisplayDetails();

        // Update student details
        student.UpdateDetails("Ravi", 30, "B");

        // Display updated details
        Console.WriteLine("\nUpdated Details:");
        student.DisplayDetails();
    }
}