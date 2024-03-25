<?php
class DatabaseConnection
{
  private static $instance = null;
  private $connection;

  // Private constructor to prevent external instantiation.
  private function __construct()
  {
    $this->connection = new PDO("mysql:host=localhost;dbname=mydb", "user", "password");
    // Set PDO error mode to exception
    $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }

  // Static method to access the singleton instance.
  public static function getInstance()
  {
    if (self::$instance === null) {
      self::$instance = new DatabaseConnection();
    }
    return self::$instance;
  }

  // Method to execute a query
  public function query($sql)
  {
    return $this->connection->query($sql);
  }

  // Prevent the instance from being cloned
  private function __clone()
  {
  }

  // Prevent from being unserialized
  private function __wakeup()
  {
  }
}

// Usage
$db = DatabaseConnection::getInstance();
$result = $db->query("SELECT * FROM users");

// In this example, we've added PDO connection handling within the constructor to connect to a MySQL database. We also added two magic methods, `__clone` and `__wakeup`, and made them private to prevent cloning and unserialization of the instance, which are other ways the singleton property could be violated.
