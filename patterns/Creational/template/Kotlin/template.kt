// Abstract class defining the template for managing names
abstract class NamesTemplate {
    // Template method for managing names with validation and addition logic
    fun manageNames(name: String) {
        println("Starting to manage the name: $name")
        // Validate name - must not be empty and should start with an uppercase letter
        if (isValidName(name)) {
            // Check if the name already exists in the database
            if (!checkName(name)) {
                addName(name) // Add name to the database
                println("$name added successfully. Names in DB: " + listNames())
            } else {
                println("$name is already in the database")
            }
        } else {
            println("Invalid name: $name")
        }
        println("Finished managing the name: $name\n")
    }

    // Helper method to validate the name format
    private fun isValidName(name: String) = name.isNotEmpty() && name[0].isUpperCase()

    // Abstract methods to be implemented by subclasses for specific behavior
    abstract fun addName(name: String)
    abstract fun checkName(name: String): Boolean
    abstract fun listNames(): List<String>
}

// Concrete implementation of NamesTemplate for managing a database of names
class NamesDatabase : NamesTemplate() {
    private val namesList = mutableListOf<String>()

    // Adds a name to the database and returns success status
    override fun addName(name: String) {
        namesList.add(name)
    }

    // Checks if a name exists in the database
    override fun checkName(name: String) = namesList.contains(name)

    // Returns a list of names in the database
    override fun listNames() = namesList.toList()
}

fun main() {
    val namesDatabase = NamesDatabase()

    println("Managing names in the database:")
    namesDatabase.manageNames("Lara")  // Expected: "Lara added successfully. Names in DB: [Lara]"
    namesDatabase.manageNames("Katrina")  // Expected: "Katrina added successfully. Names in DB: [Lara, Katrina]"
    namesDatabase.manageNames("lara")  // Expected: "Invalid name: lara"
}
