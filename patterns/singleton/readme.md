# Singleton - php

## Explanation

The Singleton pattern ensures that a class has only one instance and provides a global access point to it. This creational design pattern is useful when you want to control access to a single instance of a class, typically for resource management or logging purposes.

## Features

1. Single Instance: Ensures that a class has only one instance and provides a global point of access to it.
2. Global Access: Provides a way to access the instance without the need to create a new one each time.
3. Lazy Initialization: The instance is created only when it is requested for the first time, improving performance.
4. Thread Safety: Ensures that the singleton instance is created safely in a multi-threaded environment.
5. Private Constructor: Prevents external classes from instantiating the singleton class directly.
