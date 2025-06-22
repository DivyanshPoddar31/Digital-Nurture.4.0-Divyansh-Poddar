package Assignments.Week1.SingletonPattern;

public class Logger {
    private static Logger instance;

    // Private constructor to prevent external instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Public static method to provide global access point
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Example logging method
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}