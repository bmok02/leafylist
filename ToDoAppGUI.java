import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ToDoAppGUI extends JFrame {
    private ToDoList toDoList;

    private JTextField taskDescriptionField;
    private JComboBox<String> priorityComboBox;
    private DefaultListModel<String> taskListModel;
    private JList<String> taskList;

    public ToDoAppGUI() {
        toDoList = new ToDoList();
        setTitle("To-Do List Application");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Initialize UI components
        initializeUI();

        setVisible(true);
    }

    private void initializeUI() {
        // Create the main panel
        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        // Top panel for adding tasks
        JPanel addTaskPanel = new JPanel();
        addTaskPanel.setLayout(new FlowLayout());

        taskDescriptionField = new JTextField(15);
        priorityComboBox = new JComboBox<>(new String[]{"High", "Medium", "Low"});

        JButton addButton = new JButton("Add Task");
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addTask();
            }
        });

        addTaskPanel.add(new JLabel("Task:"));
        addTaskPanel.add(taskDescriptionField);
        addTaskPanel.add(new JLabel("Priority:"));
        addTaskPanel.add(priorityComboBox);
        addTaskPanel.add(addButton);

        // Center panel for task list
        taskListModel = new DefaultListModel<>();
        taskList = new JList<>(taskListModel);
        JScrollPane taskScrollPane = new JScrollPane(taskList);

        // Bottom panel for actions
        JPanel actionPanel = new JPanel();
        actionPanel.setLayout(new FlowLayout());

        JButton completeButton = new JButton("Complete Task");
        completeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                completeTask();
            }
        });

        JButton deleteButton = new JButton("Delete Task");
        deleteButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                deleteTask();
            }
        });

        actionPanel.add(completeButton);
        actionPanel.add(deleteButton);

        // Add panels to main panel
        panel.add(addTaskPanel, BorderLayout.NORTH);
        panel.add(taskScrollPane, BorderLayout.CENTER);
        panel.add(actionPanel, BorderLayout.SOUTH);

        // Add main panel to frame
        add(panel);
    }

    private void addTask() {
        String description = taskDescriptionField.getText();
        String priority = (String) priorityComboBox.getSelectedItem();
        if (description.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Task description cannot be empty.", "Error", JOptionPane.ERROR_MESSAGE);
            return;
        }
        toDoList.addTask(description, priority);
        updateTaskList();
        taskDescriptionField.setText("");
    }

    private void completeTask() {
        int selectedIndex = taskList.getSelectedIndex();
        if (selectedIndex != -1) {
            toDoList.markTaskAsCompleted(selectedIndex);
            updateTaskList();
        } else {
            JOptionPane.showMessageDialog(this, "Please select a task to complete.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void deleteTask() {
        int selectedIndex = taskList.getSelectedIndex();
        if (selectedIndex != -1) {
            toDoList.removeTask(selectedIndex);
            updateTaskList();
        } else {
            JOptionPane.showMessageDialog(this, "Please select a task to delete.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void updateTaskList() {
        taskListModel.clear();
        for (Task task : toDoList.getTasks()) {
            taskListModel.addElement(task.toString());
        }
    }

    public static void main(String[] args) {
        
        SwingUtilities.invokeLater(ToDoAppGUI::new);
    }
}