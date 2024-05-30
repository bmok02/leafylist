package loginpage;

public class IDAndPasswords {
    
    IDAndPasswords() {
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

            System.out.println(loginPairList);
            
        } catch(SQLException e) {
                e.printStackTrace();
        }
    }
}
