## Structs

### Declaring structs
A struct is something like a wrapper for different values. It is a value type and allocated on the stack (in .NET, this can differ for other backends). A struct can only contain values. 

The syntactic structure of a struct:
```ebnf
<struct_value> ::= "let" <name> ":" <typename> ";"
<struct_declaration> ::= <modifier>? "struct" <name> "{" <struct_value>* "}"
```

An automatic constructor will be generated for the struct to initialize all fields.

A simple example:
```back
public struct Point {
    let X : i32;
    let Y : i32;
}
```

### Working with structs

To create an instance of a struct you have to call the constructor. 

```back
let p = Point::new(5, 8);
```

The code above creates a new instance of the struct `Point` and calls the constructor to initialize the field `X` with 5 and the field `Y` with 8.

To index an instance of a struct by one of its fields, use the `.`-operator.

```back
print(p.X);
print(p.Y);
```
