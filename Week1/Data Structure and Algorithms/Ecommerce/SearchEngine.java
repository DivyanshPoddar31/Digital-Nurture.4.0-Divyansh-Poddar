package Assignments.Week1.Ecommerce;

import java.util.Arrays;
import java.util.Comparator;

public class SearchEngine {

    // Linear Search: search by name
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search: search by name (array must be sorted)
    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = name.compareToIgnoreCase(products[mid].productName);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) high = mid - 1;
            else low = mid + 1;
        }

        return null;
    }

    // Utility: Sort products by name
    public static void sortProductsByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
    }
}
