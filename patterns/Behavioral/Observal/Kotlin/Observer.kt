/**
 * RESOURCES USED:
 * 
 * This one I watched the entire video, very helpful resource
 * https://www.youtube.com/watch?v=_BpmfnqjgzQ&t=2245s
 * 
 * This one I watched part of it, mainly for understanding how to write with kotlin, as this is my first time.
 * https://www.youtube.com/watch?v=5WIS-GydJmw&t=585s
 * 
 * Additionally, I used stack overflow, kotlin docs and other misc resources that I can't remember
 */
// Interface for the subject(s) -> the one(s) who will be watched
interface Subjects {
  fun subscribe(observer: Observers)
  fun unsubscribe(observer: Observers)
  fun notifyObservers()
  fun setState(state: String?)
  fun getState(): String?
}

// Interface for the observer(s) -> the one(s) who will be watching
interface Observers {
  fun update(subject: Subjects)
}

class Subject : Subjects {
  // creates a list of observers
  private val observersList = mutableListOf<Observers>()
  // creates a default state
  private var state: String? = ""

  // adds an observer to a subject
  override fun subscribe(observer: Observers) {
      if(!observersList.contains(observer)) {
          println("$observer is now subscribed to $this");
          observersList.add(observer)
      } else {
          println("$observer is already subscribed to $this");
      }
  }
  // adds an array of observers to a subject
  fun subscribe(observers: MutableList<Observers>) {
      observers.forEach { observer ->
          subscribe(observer)
      }
  }

  // removes an observer from a subject
  override fun unsubscribe(observer: Observers) {
      // checks if observer is currently subscribed
      if (observersList.contains(observer)) {
          println("$observer is now unsubscribed to $this");
          observersList.remove(observer)
      } else {
          println("$observer is not subscribed to $this");
      }
  }
  // removes an array of observers from a subject
  fun unsubscribe(observers: MutableList<Observers>) {
      observers.forEach { observer ->
          unsubscribe(observer)
      }
  }
  // notifies all observers that the subject is changed
  override fun notifyObservers() {
      observersList.forEach { observer ->
          observer.update(this)
      }
  }

  // sets the state of the subject
  override fun setState(state: String?) {
      this.state = state
  }

  // returns the state of the subject to the observer
  override fun getState(): String? {
      return this.state
  }
}

class Observer : Observers {
  override fun update(subject: Subjects) {
      println("$this Subject Change now: ${subject.getState()}")
  }
}