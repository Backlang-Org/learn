# Functions


A piece of code can be combined as a function. A function can expect parameters and can return a value. The simplest function is the `println` function to print a message to the output stream (for example the console).

The syntactic structure of a function:
```ebnf
<parameter> ::= <name> ":" <typename> ("=" <expression>)?
<parameter_list> ::= <parameter> || <parameter> "," <parameter_list>
<function_definition> ::= <modifier>? "func" <name> "(" <parameter_list>* ")" ("->" <typename>)? "{" <body> "}"
```

A quick example:
```back
func printHello() {
    println("Hello!");
}
```

When you want to pass arguments to a function, do it like this:

```back
func greet(name: string) {
    println("Morning, " + name + "!");
}

greet("Bob");
```

To give a return type, you put an arrow before the block of code:

```back
func getMyLovedNumber() -> i32 {
    return 2;
}

let lovedNumber = getMyLovedNumber(); // this will be 2
```


For default values, just define them in the head of the function like so:

```back
private static func greet(name: string = "Oh no it's nameless :c") -> none {
    println("Morning, " + name + "!"); 
}

greet(); // this will be "Morning, Oh no it's nameless :c!"
```

Generic arguments will be defined with the `where` keyword after the arguments:

```back
private static func myCoolFunction<T>(smth: T) where T: GameObject -> T {
    // code...
}
```

When you want to skip a default variable of a function, do it this way:

```back
func greet(name : string, thisIsUseless: bool = false) {
    println("Morning, " + name + "!"); 
}

greet(name = "Peter"); // we skip the bool "thisIsUseless" and jump directly to the name argument
```

Optional arguments have to be after mandatory arguments.

## Exercises


And now, a _quiz_:

{{#quiz ../../quizzes/functions.toml}}