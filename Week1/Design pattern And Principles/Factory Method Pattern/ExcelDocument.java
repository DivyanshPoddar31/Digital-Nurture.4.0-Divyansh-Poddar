package Assignments.Week1.FactoryMethodPattern;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Excel Document...");
    }
}
