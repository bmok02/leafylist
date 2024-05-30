package loginpage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

    
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(
                "jdbc:sql://localhost:3306/login_schema",
                "root",
                "password"
            );
    
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM USERS");
            ImList<Pair<String, String>> loginPairList = new ImList<Pair<String, String>> ();

            while (resultSet.next()) {

                Pair<String, String> loginPair = resultSet.getString("username", "password_hash")
                loginPairList = loginPairList.add(loginPair);
            }
            
        } catch(SQLException e) {
                e.printStackTrace();
        }

        IDAndPasswords idAndPasswords = new IDAndPasswords(loginPairList);
        
        LoginPage loginPage = new LoginPage(idAndPasswords.getLoginInfo());

    }
