import java.util.Scanner;

public class ToDoApp {
    public static void main(String[] args) {
        ToDoList toDoList = new ToDoList();
        Scanner scanner = new Scanner(System.in);
        String command;

        while (true) {
            System.out.println("Enter a command (add, view, complete, delete, exit): ");
            command = scanner.nextLine().trim().toLowerCase();

            switch (command) {
                case "add":
                    System.out.println("Enter task description: ");
                    String description = scanner.nextLine();
                    System.out.println("Enter task priority (high, medium, low): ");
                    String priority = scanner.nextLine();
                    toDoList.addTask(description, priority);
                    break;

                case "view":
                    toDoList.viewTasks();
                    break;

                case "complete":
                    System.out.println("Enter task number to mark as completed: ");
                    int completeIndex = Integer.parseInt(scanner.nextLine()) - 1;
                    toDoList.markTaskAsCompleted(completeIndex);
                    break;

                case "delete":
                    System.out.println("Enter task number to delete: ");
                    int deleteIndex = Integer.parseInt(scanner.nextLine()) - 1;
                    toDoList.removeTask(deleteIndex);
                    break;

                case "exit":
                    System.out.println("Exiting...");
                    scanner.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid command.");
            }
        }
    }
}