## Unit Of Measure Types

A unit of measure type can gives a literal a typed unit. So you can use it to ensure that you are working with the right number unit. 

To define a simple unit type:

```ebnf
<unit_def> ::= "unit" <name> ";"
```

A simple example for a definition and usage of an unit type:
```back
unit seconds;

public static func main() {
    let time = 12<seconds>;
}
```
