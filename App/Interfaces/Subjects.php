<?php

namespace App\Interfaces;

use App\Models\Observer;

interface Subjects {
  public function subscribe(Observer $observer);
  public function unsubscribe(Observer $observer);
  public function notify();
  public function setData($data);
  public function getData(): string;
}
