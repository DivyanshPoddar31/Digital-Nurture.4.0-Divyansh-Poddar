package com.library.repository;

public class BookRepository {
    public void save(String bookName) {
        System.out.println("BookRepository: Saving book - " + bookName);
        System.out.println("Book added to repository ✅");
    }
}
