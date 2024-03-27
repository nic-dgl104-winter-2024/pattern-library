              /* ------>  Reference singleton pattern <--------  */  
// https://www.c-sharpcorner.com/UploadFile/8911c4/singleton-design-pattern-in-C-Sharp/
// https://medium.com/developer-rants/singletons-in-c-2c53a846b246
              


using System;

public sealed class Student
{
    // Properties of the student
    public string name { get; set; }
    public int age { get; set; }
    public string grade { get; set; }

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
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Method to update student details
    public void UpdateDetails(string name, int age, string grade)
    {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Method to display student details
    public void DisplayDetails()
    {
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Age: {age}");
        Console.WriteLine($"Grade: {grade}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Accessing the singleton instance
        Student primaryStudent = Student.Instance;

        // Display original details
        Console.WriteLine("Original Details:");
        primaryStudent.DisplayDetails();

        // Update student details
        primaryStudent.UpdateDetails("Ravi", 30, "B");

        // Display updated details
        Console.WriteLine("\nUpdated Details: using primaryStudent object");
        primaryStudent.DisplayDetails();

        /// <summary>
        ///  If developer try to create the new object of student class, he will get error at the compile time
        ///  Comile time error: Student.Student(string, int, string)' is inaccessible due to its protection level
        /// </summary>
        
        // <example> 

        //Student primaryStudent = new Student("",0,""); 
        //primaryStudent.UpdateDetails("Parminder",12,"C");
        
        // </example>

        /// <summary>
        /// Developer can create another instance of Student singleton class and update the details
        /// </summary>
        
        /// <example>
        Student secondaryStudent = Student.Instance;  // creating new object referring to same class
        secondaryStudent.UpdateDetails("Shubham", 32, "A");  // updating the grade of student class using secondaryStudent object

        Console.WriteLine("\nUpdated Details: using secondaryStudent object");
        primaryStudent.DisplayDetails(); // Showing the details using the student object
        
        ///</example>

        /// <summary>
        /// Developer can compare the both instances by comparing each other 
        ///  Output: Both object are same (true)
        /// </summary>
        
        /// <example> 

        if(primaryStudent == secondaryStudent)  // comaparing the both instances
        {
            Console.WriteLine("\nComapare both instances: primaryStudent and secondaryStudent");
            Console.WriteLine("Both objects are same");   
        }
        /// </example>
       

         /// <summary>
        /// Developer can check the using the bool if the instance is exist before operating the operation 
        ///  Output if Instace exist: Is the instance created? True
        /// </summary>
        
        //  <example>

        bool isInstanceCreated = Student.Instance != null; //Checking if the instance has been created yet
        Console.WriteLine("\nCheck instance");
        Console.WriteLine($"Is the instance created? {isInstanceCreated}"); 

        // </example>
    }

}