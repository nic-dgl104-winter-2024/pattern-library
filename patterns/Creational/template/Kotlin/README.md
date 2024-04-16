# Template Pattern Implementation in Kotlin

Now, let's delve into this project which demonstrates the Template Pattern using a simple name management system in Kotlin. Okay, see, the Template Pattern is a behavioral design pattern that defines the program skeleton in an operation, deferring some steps to subclasses. It lets one redefine certain steps of an algorithm without changing the algorithm's structure.

## Structure

- `NamesTemplate`: An abstract class that defines the template method and the steps of the algorithm.
- `NamesDatabase`: A concrete class that implements the specific steps defined in the abstract class.

## Classes

### NamesTemplate

The `NamesTemplate` class is an abstract base class that outlines the structure of the name management workflow. It contains the template method `manageNames()` which calls the following abstract methods in a specific order:

- `addName(name: String)`: Abstract method to add a name to the management system.
- `checkName(name: String)`: Abstract method to check if a name exists in the management system.
- `listNames()`: Abstract method to list all names in the management system.

Concrete subclasses of `NamesTemplate` must implement these methods.

### NamesDatabase

So, the `NamesDatabase` class is a concrete implementation of the `NamesTemplate`. It manages a list of names in a database-like structure. This class implements the following methods:

- `addName(name: String)`: Adds a name to the internal list and prints a confirmation message.
- `checkName(name: String)`: Checks if a name is present in the internal list and prints a message indicating whether it exists.
- `listNames()`: Prints all names currently in the internal list.

## Usage

Now, to use this name management system, let's create an instance of `NamesDatabase` and call the `manageNames` method with the name you wish to manage. Here is an example main function demonstrating its usage:

```kotlin
fun main() {
    val namesDatabase = NamesDatabase()

    println("Managing names in the database:")
    namesDatabase.manageNames("Lara")
    namesDatabase.manageNames("Katrina")
}

## Updates

#### Modifications in `NamesTemplate` class

- Okay, so we've added a new private method called `isValidName` to the `NamesTemplate` class. This method is a real game changer as it checks if the input name isn’t just a bunch of blank spaces and kicks off with a capital letter. Yay!

#### Enhancements in `NamesDatabase` class

- Now, in the `NamesDatabase` class, there's this `addName` method that’s doing double duty. Not only does it tuck the name into the internal list, but it also runs a quick check with the `checkName` method. This is our double-check mechanism ensuring the name gets onboard without a hitch. Ta-da!

#### Example Usage

- Here’s the scoop in the `main` function example: it showcases our validation logic. The name "Lara" (yep, starting with an uppercase letter) sails through and gets added, while "katrina" (oh no, a lowercase starter) flunks the validation and doesn’t make the cut in the `manageNames` method. Aha, that’s how our validation rolls!