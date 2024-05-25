struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }

    fn greet(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }

    fn birthday(&mut self) {
        self.age += 1;
    }
}

fn main() {
    let mut person = Person::new("Alice".to_string(), 30);
    person.greet();
    person.birthday();
    println!("After birthday, {} is now {} years old.", person.name, person.age);
}

// Rustの特徴:

// 構造体を使用してオブジェクトを表現します。
// implブロックを使用して、構造体のメソッドを定義します。
// &selfを使用して、メソッドのレシーバを不変の参照として受け取ります。
// &mut selfを使用して、メソッドのレシーバを可変の参照として受け取ります。
// 所有権と借用の概念により、メモリの安全性を保証します。