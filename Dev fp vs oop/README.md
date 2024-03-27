# Contrast functional patterns vs. OOP design patterns
Sumiit have worked on the README file, but I want to do more with the code. Ashley suggested some areas to focus on. I want to make sure I'm helping the project in the right way so summit have worked on javascript in his part of contribution and i am working on JAVA 

## Introduction
In software development, we use different ways to solve problems. Two common methods are functional patterns and Object-Oriented Programming (OOP) design patterns. These methods help us organize our code and make it easier to understand and work with. Let's explore each of them to see how they work and what they do.

## Functional design patterns
Functional design patterns are like recipes for writing code in functional programming. They help solve common problems and make code easier to understand and work with. here are some of the following points for that:
* Higher-Order Functions: 
Functions that can take other functions as input or give functions as output. They make code more flexible and shorter.
* Recursion: 
Solving big problems by breaking them down into smaller ones. It's like solving a puzzle one piece at a time.
* Map, Filter, and Reduce: These are tools for working with lists of data. Map changes each item, filter picks certain items, and reduce combines all the items together.

## Examples using map, filter and reduce:
public class Main {
    public static void main(String[] args) {
        // Sample list of numbers
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Example 1: Using map to square each number
        List<Integer> squaredNumbers = numbers.stream()
                                              .map(x -> x * x)
                                              .toList();
        System.out.println("Squared numbers: " + squaredNumbers);

        Output: Squared numbers: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

        // Example 2: Using filter to select even numbers
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(x -> x % 2 == 0)
                                           .toList();
        System.out.println("Even numbers: " + evenNumbers);
        Output: Even numbers: [2, 4, 6, 8, 10]

        // Example 3: Using reduce to find the sum of all numbers
        int sumOfNumbers = numbers.stream()
                                  .reduce(0, Integer::sum);
        System.out.println("Sum of numbers: " + sumOfNumbers);
        Output: Sum of numbers: 55
    }
}

## Object Oriented design patterns
Object-oriented design patterns are like templates for solving common problems when making software. They help organize code in a way that makes it easier to understand and work with. Some examples are Singleton, Factory Method, Abstract Factory, Builder, Prototype, Adapter, Decorator, Composite, Proxy, Facade, Observer, Strategy, State, Template Method, and Command patterns. Each pattern helps with different parts of making software, like creating objects, changing their behavior, or making them work together. They're like handy tools that developers can use to build better software more efficiently.

## Example of the same code used in functional programming 
public class NumberManipulator {
    private List<Integer> numbers;

    public NumberManipulator(List<Integer> numbers) {
        this.numbers = numbers;
    }

    public List<Integer> squareNumbers() {
        List<Integer> squaredNumbers = new ArrayList<>();
        for (int num : numbers) {
            squaredNumbers.add(num * num);
        }
        return squaredNumbers;
    }

    public List<Integer> getEvenNumbers() {
        List<Integer> evenNumbers = new ArrayList<>();
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenNumbers.add(num);
            }
        }
        return evenNumbers;
    }

    public int sumNumbers() {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }

    public static void main(String[] args) {
        // Sample list of numbers
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        NumberManipulator manipulator = new NumberManipulator(numbers);

        // Example 1: Square each number
        List<Integer> squaredNumbers = manipulator.squareNumbers();
        System.out.println("Squared numbers: " + squaredNumbers);

        // Example 2: Select even numbers
        List<Integer> evenNumbers = manipulator.getEvenNumbers();
        System.out.println("Even numbers: " + evenNumbers);

        // Example 3: Sum all numbers
        int sum = manipulator.sumNumbers();
        System.out.println("Sum of numbers: " + sum);
    }
}

## Conclusion: 
In conclusion, functional programming is about handling data in a straightforward and predictable way, while object-oriented programming is about organizing code into reusable parts, like building blocks. Functional programming is great for tasks involving lots of data, while object-oriented programming is better for building bigger, more complex systems. By using both approaches together, developers can make software that's flexible and works well for different kinds of projects.

## References:
* https://fluxtech.me/blog/object-oriented-programming-vs-functional-programming/#:~:text=Key%20differences%20between%20the%20two%20paradigms&text=FP%20focuses%20on%20functions%20and,%2Dorder%20functions%2C%20and%20recursion.

* https://careerfoundry.com/en/blog/web-development/functional-programming-vs-oop/

