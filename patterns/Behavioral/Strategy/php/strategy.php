
<?php
//In this example we will implement the Strategy pattern in PHP for a string filtering system. 
//We’ll create different strategies to filter out specific words or phrases from user input.


//Define the strategy interface
interface StringFilterStrategy {
    public function filter($input);
}

// Concrete strategy classes
class BlacklistFilter implements StringFilterStrategy {
    private $blacklist;

    public function __construct(array $blacklist) {
        $this->blacklist = $blacklist;
    }

    public function filter($input) {
        $filtered = $input;
        foreach($this->blacklist as $word) {
            $filtered = str_ireplace($word, '***', $filtered);
        }
        if ($filtered === $input) return $input . " safe";
        return $filtered;
    }
}


// Context class
class StringFilterContext {
    private static $strategy;

    public static function setStrategy(StringFilterStrategy $strategy) {
        self::$strategy = $strategy;
    }

    public static function applyFilter($input) {
        return self::$strategy->filter($input);
    }
}

// Client code
$blacklist = ['badword1', 'inappropriate', 'spam'];


StringFilterContext::setStrategy(new BlacklistFilter($blacklist));
$filteredInput1 = StringFilterContext::applyFilter("This is an inappropriate message with badword1.This message is full of spam");

echo "Filtered input 1: $filteredInput1\n";

