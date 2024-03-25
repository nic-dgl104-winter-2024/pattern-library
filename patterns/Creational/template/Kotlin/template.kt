abstract class NamesTemplate {
    fun manageNames(name: String) {
        println("Starting to manage the name: $name")
        addName(name)
        checkName(name)
        listNames()
        println("Finished managing the name: $name\n")
    }

    abstract fun addName(name: String)
    abstract fun checkName(name: String)
    abstract fun listNames()
}

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

fun main() {
    val namesDatabase = NamesDatabase()

    println("Processing names in the database:")
    namesDatabase.manageNames("Lara")
    namesDatabase.manageNames("Katrina")
}
