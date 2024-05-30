package bmokcode;
public class Task {
    private String description;
    private String priority;
    private boolean isCompleted;

    public Task(String description, String priority) {
        this.description = description;
        this.priority = priority;
        this.isCompleted = false;
    }

    public String getDescription() {
        return description;
    }

    public String getPriority() {
        return priority;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    @Override
    public String toString() {
        return (isCompleted ? "[X] " : "[ ] ") + description + " (Priority: " + priority + ")";
    }
}