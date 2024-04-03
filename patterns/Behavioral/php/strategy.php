
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
        foreach ($this->blacklist as $word) {
            $input = str_ireplace($word, '***', $input);
        }
        return $input;
    }
}

class WhitelistFilter implements StringFilterStrategy {
    private $whitelist;

    public function __construct(array $whitelist) {
        $this->whitelist = $whitelist;
    }

    public function filter($input) {
        $filteredWords = [];
        foreach (explode(' ', $input) as $word) {
            if (in_array($word, $this->whitelist)) {
                $filteredWords[] = $word;
            }
        }
        return implode(' ', $filteredWords);
    }
}

// Context class
class StringFilterContext {
    private $strategy;

    public function setStrategy(StringFilterStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function applyFilter($input) {
        return $this->strategy->filter($input);
    }
}

// Client code
$blacklist = ['badword1', 'inappropriate', 'spam'];
$whitelist = ['goodword1', 'positive', 'safe'];

$context = new StringFilterContext();

// Use the blacklist strategy
$blacklistStrategy = new BlacklistFilter($blacklist);
$context->setStrategy($blacklistStrategy);
$filteredInput1 = $context->applyFilter("This is an inappropriate message with badword1.");

// Switch to the whitelist strategy
$whitelistStrategy = new WhitelistFilter($whitelist);
$context->setStrategy($whitelistStrategy);
$filteredInput2 = $context->applyFilter("This is a positive message with goodword1.");

echo "Filtered input 1: $filteredInput1\n";
echo "Filtered input 2: $filteredInput2\n";

?>