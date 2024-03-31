class DatabaseConnection {
    private static DatabaseConnection instance;
    private Connection conn;

    private DatabaseConnection() {
        // Private constructor to prevent instantiation
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public Connection getConnection() {
        if (conn == null) {
            // Initialize database connection
        }
        return conn;
    }
}

// Usage
DatabaseConnection dbConn = DatabaseConnection.getInstance();
Connection conn = dbConn.getConnection();

/* This example uses the DatabaseConnection class to create a single instance and provide global access through the getInstance method for retrieving the database connection. */
