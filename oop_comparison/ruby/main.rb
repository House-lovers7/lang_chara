class Person
    attr_reader :name
    attr_accessor :age
  
    def initialize(name, age)
      @name = name
      @age = age
    end
  
    def greet
      puts "Hello, my name is #{@name} and I am #{@age} years old."
    end
  
    def birthday
      @age += 1
    end
  end
  
  person = Person.new("Alice", 30)
  person.greet
  person.birthday
  puts "After birthday, #{person.name} is now #{person.age} years old."

#   Rubyの特徴:

# クラスベースのオブジェクト指向プログラミングをサポートしています。
# initializeメソッドはコンストラクタとして機能し、インスタンス変数を初期化します。
# インスタンス変数には@プレフィックスを使用します。
# attr_readerとattr_accessorを使用して、ゲッターとセッターを自動的に生成できます。
# メソッドの定義には、defキーワードを使用し、ブロックの終わりには、endキーワードを使用します。