import java.awt.*;

import javax.swing.*;

public class MainFrame extends JFrame {
    public void initialize(User user) {
        /*************** Info Panel ***************/
        JPanel infoPanel = new JPanel();
        infoPanel.setLayout(new GridLayout(0, 2, 5, 5));
        infoPanel.setBorder(BorderFactory.createEmptyBorder(30, 50, 30, 50));
        infoPanel.add(new JLabel("Email"));
        infoPanel.add(new JLabel(user.email));
        infoPanel.add(new JLabel("Username"));
        infoPanel.add(new JLabel(user.username));

        add(infoPanel, BorderLayout.NORTH);

        setTitle("Dashboard");
        setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
        setSize(1100, 650);
        setLocationRelativeTo(null);
        setVisible(true);
    }


    
}
