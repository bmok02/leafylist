import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.Dimension;
import java.awt.Font;

public class TitleBar extends JPanel {

    //constructor
    TitleBar() {
        this.setPreferredSize(new Dimension(400, 80));

        JLabel titleText = new JLabel("To Do List");
        titleText.setPreferredSize(new Dimension(200, 80));
        titleText.setFont(new Font("Sans-serif", Font.BOLD, 18));
        titleText.setHorizontalAlignment(JLabel.CENTER);

        this.add(titleText);
    }
}

