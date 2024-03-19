<?php

namespace Interface\Subject;

use Observer;

class Subject extends Subject
{
  public static $observer_manager = [];
  public static $data;
  public function subscribe(Observer $observer)
  {
    if (!in_array($observer, $this->observer_manager)) {
      array_push($this->observer_manager, $observer);
      return $_SESSION['success'] = "Observer now subscribed";
    } else {
      return $_SESSION['error'] = "Observer already subscribed";
    }
  }
  public function unsubscribe(Observer $observer)
  {
    if (in_array($observer, $this->observer_manager)) {
      array_pop($this->observer_manager[$observer]);
      $_SESSION['success'] = "Observer now subscribed";
      return true;
    } else {
      $_SESSION['error'] = "Observer already subscribed";
      return false;
    }
  }
  public function notify()
  {
    foreach ($this->observer_manager as $observer) {
      $observer->update($this);
    }
  }
  public function getData(): String
  {
    return $this->data;
  }
}
