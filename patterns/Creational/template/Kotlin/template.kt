// Abstract class defining the template method and steps
abstract class NamesTemplate {
    // Template method to manage names
    fun manageNames(name: String) {
        println("Starting to manage the name: $name")
        addName(name)
        checkName(name)
        listNames()
        println("Finished managing the name: $name\n")
    }

    // Steps to be implemented by subclasses
    abstract fun addName(name: String)
    abstract fun checkName(name: String)
    abstract fun listNames()
}

// Concrete class implementing the steps for the names database
class NamesDatabase : NamesTemplate() {
    private val namesList = mutableListOf<String>()

    override fun addName(name: String) {
        namesList.add(name)
        println("Added '$name' to the database.")
    }

    override fun checkName(name: String) {
        if (namesList.contains(name)) {
            println("Checked: '$name' exists in the database.")
        } else {
            println("Checked: '$name' does not exist in the database.")
        }
    }

    override fun listNames() {
        println("Current names in the database: $namesList")
    }
}

// Main function to demonstrate the template pattern with names database
fun main() {
    val namesDatabase = NamesDatabase()

    println("Processing names in the database:")
    namesDatabase.manageNames("Lara")
    namesDatabase.manageNames("Katrina")
}
