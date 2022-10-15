## All predefined Macros

 Name          | Description                                                       | Example                                                      |
|---------------|-------------------------------------------------------------------|--------------------------------------------------------------|
nameof        | Converts the 'key' name component of an expression to a string    | <pre>nameof(A.B<C>(D)) == "B"                                |
concatId      | Concats 2 Ids to a new Id                                         | <pre>concatId(a, b) == ab                                    |
$variableName | Expands a variable (scoped property)                              | <pre>if $target == "dotnet" {}</pre>                         |
generateId()  | Generates a new Id                                                | <pre>generateId() == a0                                      |
target        | Compile code in body only if the given compilation target is same | <pre>target(dotnet) { print("only run if target is .net"); } |
quote        |Generates the tree of the given code                               |<pre>quote { print("Hi"); }
unroll       |This macro "pastes" the same body for every entry in the given list|<pre>#unroll(it, 1..3) { print("It also has: " + it); }</pre> converts to <pre>print("It also has: 1"); print("It also has: 2"); print("It also has: 3");|
|todo|Add a warning to memorize todos. Can be used to generate a todo list|<pre>@todo("Implement some new functionality") <br /> func nothing() {}</pre>|