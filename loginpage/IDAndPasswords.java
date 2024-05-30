package loginpage;

public class IDAndPasswords {
    private ImList<Pair<String, String>> loginPairList;

    
    IDAndPasswords(ImList<Pair<String, String>> loginPairList) {
        this.loginPairList = loginPairList;
    }

    protected ImList<Pair<String, String>> getLoginInfo() {
        return this.loginPairList;
    }
}
