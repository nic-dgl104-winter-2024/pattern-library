/* Kotlin handles the instantiation 'lazily' (which means it's not created until it's actually needed) and ensures it's thread-safe (which means that it can be safely executed by multiple threads simultaneously without duplicating the instance)

This singleton example creates a private and mutable empty list for names, a method for adding names to the list, and a method for getting the names on the list. 

Coded with help from https://www.kodeco.com/23623842-object-in-kotlin-and-the-singleton-pattern, https://kotlinlang.org/docs/home.html, and https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/contains.html */

object NamesDatabase {
    private val namesList = mutableListOf<String>()

// Add a name to the list
    fun addName(name: String) {
        namesList.add(name)
    }

/* See if a name is in the list */
    fun isNameOnList(name: String): Boolean = namesList.contains(name)

// Get all names on the list but create a copy of list so original remains unaffected
    fun getAllNames(): List<String> = namesList.toList()
}

// Main function

fun main() {

// Add some names to NamesDatabase
NamesDatabase.addName("Lara")
NamesDatabase.addName("Katrina")
NamesDatabase.addName("Swathy")

// Is 'Lara' in the list?
var onList = NamesDatabase.isNameOnList("Lara")
println(onList);

// Return a copy of the list of names
var currentNames = NamesDatabase.getAllNames()
println(currentNames)

}
