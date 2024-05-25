import java.util.List;

public class Character {
    private String name;
    private int age;
    private List<String> attributes;
    private String personality;
    private Stats stats;
    private String background;
    private String magic;

    // ゲッターとセッター

    public static class Stats {
        private int strength;
        private int intelligence;
        private int dexterity;
        private int agility;
        private int luck;

        // ゲッターとセッター
    }
}

public class Output extends ArrayList<Character> {}