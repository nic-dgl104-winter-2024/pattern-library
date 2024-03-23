<?php
/**
 * RESOURCES USED:
 * I wrote the Kotlin observer pattern and used the same resources
 * 
 * This one I watched the entire video, very helpful resource
 * https://www.youtube.com/watch?v=_BpmfnqjgzQ&t=2245s
 * 
 * Additionally, I used stack overflow and other misc resources that I can't remember
 */
interface Observers
{
  public function __construct();
  public function update($subject);
}

interface Subjects
{
  public function __construct();
  public function subscribe(Observer $observer);
  public function unsubscribe(Observer $observer);
  public function notify();
  public function setData($data);
  public function getData();
}

/** 
 * Description:
 * Use to observe subjects and update only after
 * the subject has changed.
 * 
 * @since 1.0.0
 */
class Observer implements Observers
{
  /**
   * Creates a unique ID for Observers
   * @var $id
   */
  private $id;

  public function __construct()
  {
    $this->id = uniqid('observer_');
  }
  public function update($subject)
  {
   echo "$this->id notified that the subject has changed to ".$subject->getData()."\r\n";
  }
  /**
   * Get ID
   * @return Observer $id
   */
  public function getId()
  {
    return $this->id;
  }
}
/**
 * Description:
 * Used to create subjects that notify observers
 * after they've changed.
 * 
 * @since 1.0.0
 */
class Subject implements Subjects
{
  private $observerList = array();
  private $data;
  private $id;

  /**
   * Creates a unique ID for Subjects
   * @var $id
   */
  public function __construct()
  {
    $this->id = uniqid('subject_');
  }
  /**
   * Subscribes Observer object to Subject object
   * @param Observer
   */
  public function subscribe(Observer $observer)
  {
    if (!in_array($observer, $this->observerList)) {
      $this->observerList[] = $observer;
      echo  $observer->getId()." is now subscribed to $this->id\r\n";
    } else {
      echo $observer->getId()." is already subscribed to $this->id\r\n";
    }
  }

  /**
   * Unsubscribe Observer object from Subject object
   * @param Observer
   */
  public function unsubscribe(Observer $observer)
  {
    $key = array_search($observer, $this->observerList);
    if ($key !== false) {
      unset($this->observerList[$key]);
      echo $observer->getId()." is now unsubscribed from $this->id\r\n";
    } else {
      echo $observer->getId()." is not subscribed to $this->id\r\n";
    }
  }

  /** 
   * Set Subject data
   * @param string
   */
  public function setData($data)
  {
    $this->data = $data;
  }

  /**
   * Send an ping to each observer subscribbed
   */
  public function notify()
  {
      foreach ($this->observerList as $observer) {
          $observer->update($this);
      }
  }

  /**
   * give data to observer
   * @return Subject $data
   */
  public function getData()
  {
    return $this->data;
  }
}
