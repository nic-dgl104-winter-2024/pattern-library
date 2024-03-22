using System;

public sealed class Student
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
        ///  If developer try to create the new object of student class, he will get error at the compile time
        ///  Comile time error: Student.Student(string, int, string)' is inaccessible due to its protection level
        /// </summary>
        
        // <example> 

        //Student student1 = new Student("",0,""); 
        //student1.UpdateDetails("R",12,"C");
        
        // </example>

        /// <summary>
        /// Developer can check the using the bool if the instance is exist before operating the operation 
        ///  Output if Instace exist: Is the instance created? True
        /// </summary>
        
        //  <example>

        bool isInstanceCreated = Student.Instance != null; //Checking if the instance has been created yet
        Console.WriteLine($"Is the instance created? {isInstanceCreated}"); 

        // </example>


        /// <summary>
        /// Developer can Create the another instance and can access the Student class and able to perform action 
        ///  Output: Both object are same (true)
        /// </summary>
        Student student1 = Student.Instance;  // creating new object referring to same class 

        if(student == student1)  // comaparing the both instances
        {
            Console.WriteLine("Both objects are same");   
        }
 
        student1.UpdateDetails("Ravi", 30, "A");  // updating the grade of student class using student1 object

        Console.WriteLine("\nUpdated Details: using Student1 object");
        student.DisplayDetails(); // Showing the details using the student object
    }

    }
}