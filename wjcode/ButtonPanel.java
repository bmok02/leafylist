import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.border.Border;

import java.awt.Dimension;
import java.awt.Font;

public class ButtonPanel extends JPanel {

    private JButton addTask;
    private JButton clear;

    Border emptyBorder = BorderFactory.createEmptyBorder();

    //Constructor
    ButtonPanel() {
        this.setPreferredSize(new Dimension(400, 60));

        addTask = new JButton("Add Task");
        addTask.setBorder(emptyBorder);
        addTask.setFont(new Font("Sans-sarif", Font.PLAIN, 18));
        
        this.add(addTask);

        this.add(Box.createHorizontalStrut(20));

        clear = new JButton("Clear Completed Tasks");
        clear.setBorder(emptyBorder);
        clear.setFont(new Font("Sans-sarif", Font.PLAIN, 18));

        this.add(clear);
    }

    public JButton getAddTask() {
        return addTask;
    }

    public JButton getClear() {
        return clear;
    }

}
