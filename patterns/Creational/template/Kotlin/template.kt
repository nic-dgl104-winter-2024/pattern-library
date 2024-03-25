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
