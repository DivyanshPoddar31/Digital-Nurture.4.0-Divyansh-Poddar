package Assignments.Week1.FinancialForecasting;

import java.util.Scanner;

public class FinancialForecasterOptimized {

    // Optimized iterative method to calculate future value
    public static double forecastFutureValue(double presentValue, double rate, int years) {
        for (int i = 0; i < years; i++) {
            presentValue *= (1 + rate);
        }
        return presentValue;
    }

    // Optional: show compound interest table year by year
    public static void printGrowthTable(double presentValue, double rate, int years) {
        System.out.println("\nYear-by-Year Forecast Table:");
        for (int i = 0; i <= years; i++) {
            double value = forecastFutureValue(presentValue, rate, i);
            System.out.printf("Year %2d: RS %.2f\n", i, value);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // User input
        System.out.print("Enter Present Value (RS): ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter Annual Growth Rate (in %): ");
        double ratePercent = scanner.nextDouble();
        double rate = ratePercent / 100;

        System.out.print("Enter Number of Years: ");
        int years = scanner.nextInt();

        // Forecast using optimized method
        double futureValue = forecastFutureValue(presentValue, rate, years);
        System.out.printf("\nFuture Value after %d years: RS %.2f\n", years, futureValue);

        // Show growth table
        printGrowthTable(presentValue, rate, years);

        scanner.close();
    }
}
