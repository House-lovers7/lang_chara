## 各言語の型の書き方の特徴、メリット・デメリット

### Python :
- 特徴: <b>Pydantic</b>ライブラリを使用して型を定義するケース。BaseModelクラスを継承してモデルを作成し、フィールドに型ヒントを付けます。
- メリット:
  - Pydanticは、データのバリデーションとシリアライズ/デシリアライズを自動的に行ってくれるため、開発者の負担が軽減されます。
  - Fieldクラスを使用して、フィールドに制約を設定できます（例: ge=3, le=18）。
- デメリット:
  - Pydanticは外部ライブラリであるため、依存関係が増えます。
  - Python自体は動的型付け言語であるため、型ヒントはあくまでも補助的な機能です。

### Go:
- 特徴: 構造体（struct）を使用して型を定義します。フィールドには型を明示的に指定します。
- メリット:
  - Goは静的型付け言語であるため、型の安全性が高く、コンパイル時にエラーを検出できます。
  - 構造体を使用することで、関連するデータをグループ化できます。
  - タグ（`json:"name"`）を使用して、JSONのシリアライズ/デシリアライズを制御できます。
- デメリット:
  - 型の定義が冗長になる場合があります。
  - 型の制約（例: 3から18の間の値）を設定するには、追加の検証ロジックが必要です。

### Java:
- 特徴: クラスを使用して型を定義します。フィールドには型を明示的に指定します。ゲッターとセッターを使用してフィールドにアクセスします。
- メリット:
  - Javaは静的型付け言語であるため、型の安全性が高く、コンパイル時にエラーを検出できます。
  - クラスを使用することで、関連するデータとメソッドをカプセル化できます。
  - 型の階層を作成できます（例: ArrayListを継承したOutput）。
- デメリット:
  - 型の定義が冗長になる場合があります。
  - ゲッターとセッターの記述が必要となり、ボイラープレートコードが増えます。

### TypeScript:
- 特徴: インターフェース（interface）を使用して型を定義します。フィールドには型を明示的に指定します。
- メリット:
  - TypeScriptは、JavaScriptに型システムを追加した言語であるため、JavaScriptの柔軟性と型の安全性を兼ね備えています。
  - インターフェースを使用することで、関連するデータを定義できます。
  - オプショナルなフィールド（例: magic?: string）を指定できます。
- デメリット:
  - TypeScriptは、JavaScriptにトランスパイルされるため、実行時のオーバーヘッドがあります。
  - 型の定義が冗長になる場合があります。