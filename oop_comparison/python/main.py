class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

    def birthday(self):
        self.age += 1

person = Person("Alice", 30)
person.greet()
person.birthday()
print(f"After birthday, {person.name} is now {person.age} years old.")

# Pythonの特徴:

# クラスベースのオブジェクト指向プログラミングをサポートしています。
# __init__メソッドはコンストラクタとして機能し、インスタンス変数を初期化します。
# セルフ参照としてselfキーワードを使用します。
# メソッドの定義には、defキーワードを使用します。
# インデントによってブロックを定義します。