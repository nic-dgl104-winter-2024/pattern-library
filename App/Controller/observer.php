<?php

namespace App\Controllers;
use App\Models\Observer;

class ObserverController extends Observer {

  public static $name;
  
  public function update($subject)
  {
    Observer::update($subject);
  }
}