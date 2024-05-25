class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }

    public void birthday() {
        age++;
    }

    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        person.greet();
        person.birthday();
        System.out.println("After birthday, " + person.name + " is now " + person.age + " years old.");
    }
}

// Javaの特徴:

// クラスベースのオブジェクト指向プログラミングをサポートしています。
// privateアクセス修飾子を使用して、フィールドをカプセル化します。
// コンストラクタを使用して、オブジェクトを初期化します。
// thisキーワードを使用して、インスタンスフィールドとコンストラクタ/メソッドの引数を区別します。