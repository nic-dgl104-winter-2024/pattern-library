<?php

namespace App\Models;

use App\Models\Observers;
use App\Interfaces\Subjects;

class Subject implements Subjects
{
  public function subscribe (Observer $observer) {

  }
  public function unsubscribe (Observer $observer) {
    
  }
  public function notify () {
    
  }
  public function setData ($data) {
    
  }
  public function getData (): string {
    return "";
  }
}
