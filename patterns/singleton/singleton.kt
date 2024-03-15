/* Kotlin handles the instantiation 'lazily' (which means it's not created until it's actually needed) and ensures it's thread-safe (which means that it can be safely executed by multiple threads simultaneously without duplicating the instance)

This singleton example creates a private and mutable empty list for names, a method for adding names to the list, and a method for getting the names on the list. 

Coded with help from https://www.kodeco.com/23623842-object-in-kotlin-and-the-singleton-pattern and https://kotlinlang.org/docs/home.html */

object NamesDatabase {
    private val namesList = mutableListOf<String>()

// Add a name to the list
    fun addName(name: String) {
        namesList.add(name)
    }

// Get a name from the list with index
    fun getName(index: Int): String = namesList[index]

// Get all names on the list but create a copy of list so original remains unaffected
    fun getAllNames(): List<String> = namesList.toList()
}

// Main function

fun main() {

// Add some names to NamesDatabase
NamesDatabase.addName("Lara")
NamesDatabase.addName("Katrina")
NamesDatabase.addName("Swathy")

// Return a copy of the list of names
var currentNames = NamesDatabase.getAllNames()
println(currentNames)

}
