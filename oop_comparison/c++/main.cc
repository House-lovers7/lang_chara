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