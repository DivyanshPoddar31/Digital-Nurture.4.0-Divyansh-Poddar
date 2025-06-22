package Assignments.Week1.FinancialForecasting;

public class FinancialForecaster {

    // Recursive method to calculate future value
    public static double forecastFutureValue(double presentValue, double rate, int years) {
        // Base case
        if (years == 0) {
            return presentValue;
        }
        // Recursive case
        return (1 + rate) * forecastFutureValue(presentValue, rate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000; // ₹10,000 today
        double rate = 0.08;          // 8% annual growth
        int years = 10;

        double futureValue = forecastFutureValue(presentValue, rate, years);
        System.out.printf("Future Value after %d years: Rupees %.2f\n", years, futureValue);
    }
}

