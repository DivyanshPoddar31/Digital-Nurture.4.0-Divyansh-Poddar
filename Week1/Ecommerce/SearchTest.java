package Assignments.Week1.Ecommerce;
import java.util.*;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "iPhone", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "T-Shirt", "Clothing"),
            new Product(105, "Headphones", "Electronics")
        };
        Scanner Sc=new Scanner(System.in);
        System.out.println("Enter the name of Product");
        String s=Sc.next();

        System.out.println("Linear Search for "+s+":");
        Product result1 = SearchEngine.linearSearch(products,s);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search for "+s+":");
        SearchEngine.sortProductsByName(products);
        Product result2 = SearchEngine.binarySearch(products,s);
        System.out.println(result2 != null ? result2 : "Product not found");
        Sc.close();
    }
}

