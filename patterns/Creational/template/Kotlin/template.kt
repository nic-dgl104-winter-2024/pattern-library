abstract class NamesTemplate {
    // Template method to manage names with input validation
    fun manageNames(name: String) {
        println("Starting to manage the name: $name")
        if (isValidName(name)) {
            val response = addName(name)
            if (response) {
                println("$name added successfully. Names in DB " + listNames())
            } else {
                println("Failed to add the $name")
            }
        } else {
            println("Invalid name: $name")
        }
        println("Finished managing the name: $name\n")
    }

    // Validation logic for the name
    private fun isValidName(name: String): Boolean {
        
        // Name should not be empty and should start with an uppercase letter
        return name.isNotEmpty() && name[0].isUpperCase()
    }

    // Steps to be implemented by subclasses
    abstract fun addName(name: String): Boolean
    abstract fun checkName(name: String): Boolean
    abstract fun listNames(): MutableList<String>
}

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

fun main() {
    val namesDatabase = NamesDatabase()

    println("Processing names in the database:")
    namesDatabase.manageNames("Lara")  // This will succeed
    namesDatabase.manageNames("katrina")  // This will fail due to lowercase starting letter
}
