<?php

use Observer;

interface Subject {
  public function subscribe(Observer $observer);
  public function unsubscribe(Observer $observer);
  public function notify();
  public function setData();
  public function getData(): String;
}