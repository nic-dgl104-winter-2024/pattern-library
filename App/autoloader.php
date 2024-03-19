<?php
spl_autoload_register(function ($class) {
    // Convert class namespace to file path
    $classPath = str_replace('\\', DIRECTORY_SEPARATOR, $class);
    $filePath = __DIR__ . '/App/' . $classPath . '.php';

    // Check if the file exists
    if (file_exists($filePath)) {
        include $filePath;
    }
});