<?php

namespace Interface\Observer;

use Subject;

class Observer extends Observer {
  public function update($subject)
  {
    return $subject->getData();
  }
}