#include <iostream>
#include <string>

class Person {
private:
    std::string name;
    int age;

public:
    Person(std::string name, int age) : name(name), age(age) {}

    void greet() {
        std::cout << "Hello, my name is " << name << " and I am " << age << " years old." << std::endl;
    }

    void birthday() {
        age++;
    }
};

int main() {
    Person person("Alice", 30);
    person.greet();
    person.birthday();
    std::cout << "After birthday, " << person.name << " is now " << person.age << " years old." << std::endl;
}


// C++の特徴:

// クラスベースのオブジェクト指向プログラミングをサポートしています。
// privateアクセス修飾子を使用して、フィールドをカプセル化します。
// コンストラクタを使用して、オブジェクトを初期化します。
// メンバ変数の初期化には、コンストラクタの初期化リストを使用できます。
// std::stringやstd::coutなど、標準ライブラリを活用します。

// これらの言語は、それぞれ独自の文法とスタイルを持っていますが、オブジェクト指向プログラミングの基本概念を共有しています。Rustは、所有権と借用の概念を導入することで、メモリの安全性を重視しています。
// Javaは、クラスベースのオブジェクト指向プログラミングに焦点を当てており、ガベージコレクションによるメモリ管理を提供しています。C++は、パフォーマンスと柔軟性を重視し、低レベルのメモリ制御を可能にしています。