<?php
class DB
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
      self::$instance = new DB();
    }
    return self::$instance;
  }

  // Method to execute a query safely with prepared statements
  public function query($sql, $params = [])
  {
    $stmt = $this->connection->prepare($sql);
    $stmt->execute($params);
    return $stmt;
  }

  // Method that executes a query and throws an exception if no result is found.
  public function findOrFail($sql, $params = [])
  {
    $stmt = $this->query($sql, $params);
    $result = $stmt->fetch();
    if (!$result) {
      throw new Exception("No result found.");
    }
    return $result;
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

// Obtain the singleton instance of the DB class
$db = DB::getInstance();

// Usage
$stmt = "SELECT * FROM users";
$results = $db->query($stmt, []);

// In this example, we've added PDO connection handling within the constructor to connect to a MySQL database. We also added two magic methods, `__clone` and `__wakeup`, and made them private to prevent cloning and unserialization of the instance, which are other ways the singleton property could be violated.
