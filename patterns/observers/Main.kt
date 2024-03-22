fun main() {
  /**
   * For this example, I am going to set the subjects as Citys and the observers as users
   * 
   * The subject will pass down the information about the citys temperature to the user
   */

  val campbellRiver = Subject()
  val courtenay = Subject()

  val user1 = Observer()
  val user2 = Observer()

  val userList = mutableListOf<Observers>(user1, user2)

  campbellRiver.subscribe(userList)
  courtenay.subscribe(user1)

  courtenay.setState("Temperature: 21")
  campbellRiver.setState("Temperature: 24")

  campbellRiver.notifyObservers()
  courtenay.notifyObservers()

  courtenay.unsubscribe(userList)
}