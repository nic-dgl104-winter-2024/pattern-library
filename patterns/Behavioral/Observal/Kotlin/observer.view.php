<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How to use it</title>
</head>

<body>
  <?php
  require 'Observer.php';
  /**
   * For this example I am using citys as a subject, and logs as the Observers.
   * Although in this example the change of states will just echo onto the page, you could have it write to a file.
   */

  $campbell_river = new Subject();
  $courtenay = new Subject();

  $text_log = new Observer();
  $table_log = new Observer();

  $campbell_river->subscribe($text_log);
  $courtenay->subscribe($text_log);
  $courtenay->subscribe($table_log);

  $courtenay->setData("temerature: 16");
  $campbell_river->setData("temerature: 20");

  $campbell_river->notify();
  $courtenay->notify();
  ?>
</body>

</html>
