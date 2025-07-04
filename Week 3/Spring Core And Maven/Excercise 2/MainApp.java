package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Scanner;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // Take user input for book name
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter book name to add: ");
        String bookName = scanner.nextLine();

        // Add the book using service
        bookService.addBook(bookName);

        scanner.close();
    }
}
