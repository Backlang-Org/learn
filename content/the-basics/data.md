# Working With Data

## Structs

## Declaring structs
A struct is something like a wrapper for different values. It is a valuetype and allocated on the stack (.Net, it can differe for other backends). A struct can only have values. 

The syntactic structure of a struct:
```ebnf
<struct_value> ::= "let" <name> ":" <typename> ";"
<struct_declaration> ::= <modifier>? "struct" <name> "{" <struct_value>* "}"
```

For the struct an automatic constructor will be generated to init all fields.

A simple example:
```back
public struct Point {
    let X : i32;
    let Y : i32;
}
```

## Working with structs

To create an instance of a struct you have to call the constructor. 

```back
let p = Point::new(5, 8);
```

The code above creates a new instance of the struct `Point` and calls the constructor to initialize the field `X` with 5 and the field `Y` with 8.

To pass a specific field to a function for example you can use the `.`-operator.

```back
print(p.X);
print(p.Y);
```

## Tuples

A tuple is like an anonymous struct. It can hold values but it don't has a name. Tuples can be used to map or return multiple values. A tuple can hold up to 8 values. 

Here is a simple example:

```back
let myTuple : (i32, bool) = (42, true);
```

```back
func doSomething() : (i32, string) {
    return (1, "Some Error Occured");
}
```