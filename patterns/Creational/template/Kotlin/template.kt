// Abstract class defining the template method and steps
abstract class NamesTemplate {
    // Template method to manage names
    fun manageNames(name: String) {
        println("Starting to manage the name: $name")
        val response = addName(name)
        if (response) {
            println("$name added successfully. Names in DB " + listNames())
        } else {
            println("Failed to add the $name")
        }
        println("Finished managing the name: $name\n")
    }

    // Steps to be implemented by subclasses
    abstract fun addName(name: String): Boolean
    abstract fun checkName(name: String): Boolean
    abstract fun listNames(): MutableList<String>
}

// Concrete class implementing the steps for the names database
class NamesDatabase : NamesTemplate() {
    private val namesList = mutableListOf<String>()

    override fun addName(name: String): Boolean {
        namesList.add(name)
        return checkName(name)
    }

    override fun checkName(name: String): Boolean {
        return namesList.contains(name)
    }

    override fun listNames(): MutableList<String> {
        return namesList.toMutableList()
    }
}

// Main function to demonstrate the template pattern with names database
fun main() {
    val namesDatabase = NamesDatabase()

    println("Processing names in the database:")
    namesDatabase.manageNames("Lara")
    namesDatabase.manageNames("Katrina")
}
