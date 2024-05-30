import java.sql.*;

public class MyJDBC {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(
                "jdbc:sql://localhost:3306/login_schema",
                "root",
                "password"
            );
    
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM USERS");
    
            while (resultSet.next()) {
                System.out.println(resultSet.getString("email"));
                System.out.println(resultSet.getString("username"));
                System.out.println(resultSet.getString("password_hash"));
            } 
        } catch(SQLException e) {
                e.printStackTrace();
        }
    }
}
