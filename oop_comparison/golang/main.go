package main

import "fmt"

// Person 構造体の定義
type Person struct {
	Name string
	Age  int
}

// 値レシーバを使用したメソッド
func (p Person) Greet() {
	fmt.Printf("Hello, my name is %s and I am %d years old.\n", p.Name, p.Age)
}

// ポインタレシーバを使用したメソッド
func (p *Person) Birthday() {
	p.Age++
}

func main() {
	// Person 構造体のインスタンスを作成
	person := Person{Name: "Alice", Age: 30}

	// 値レシーバを使用したメソッドの呼び出し
	person.Greet()

	// ポインタレシーバを使用したメソッドの呼び出し
	person.Birthday()

	// 変更された Age の確認
	fmt.Printf("After birthday, %s is now %d years old.\n", person.Name, person.Age)
}

// Person 構造体の定義:
// Person 構造体は、Name と Age の2つのフィールドを持っています。
// この構造体は、人物のデータを表現するために使用されます。

// 値レシーバを使用したメソッド Greet():
// Greet() メソッドは、Person 構造体の値レシーバとして定義されています。
// このメソッドは、Person のインスタンスの Name と Age を使って挨拶を出力します。
// 値レシーバを使用しているため、メソッド内での変更は元の構造体には影響しません。

// ポインタレシーバを使用したメソッド Birthday():
// Birthday() メソッドは、Person 構造体のポインタレシーバとして定義されています。
// このメソッドは、Person のインスタンスの Age を1つ増やします。
// ポインタレシーバを使用しているため、メソッド内での変更が元の構造体に反映されます。

// main() 関数:
// Person 構造体のインスタンス person を作成し、Name と Age を初期化します。
// 値レシーバを使用した Greet() メソッドを呼び出し、挨拶を出力します。
// ポインタレシーバを使用した Birthday() メソッドを呼び出し、Age を1つ増やします。
// 変更された Age を確認するために、再度 Name と Age を出力します。
