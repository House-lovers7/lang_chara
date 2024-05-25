class Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    birthday() {
        this.age++;
    }
}

const person = new Person("Alice", 30);
person.greet();
person.birthday();
console.log(`After birthday, ${person.name} is now ${person.age} years old.`);

// TypeScriptの特徴:

// JavaScriptのスーパーセットであり、静的型付けをサポートしています。
// クラスベースのオブジェクト指向プログラミングをサポートしています。
// コンストラクタ内でアクセス修飾子（public, private, protected）を使用して、プロパティを宣言できます。
// セルフ参照としてthisキーワードを使用します。
// メソッドの定義には、関数名と括弧のみを使用します。