## Unit Of Measure Types

A unit of measure type can gives a literal a typed unit. So you can use it to ensure that you are working with the right number unit. 

To define a simple unit type:

```ebnf
<unit_def> ::= "unit" <name> "of" <primitiveType> ";"
```

A simple example for a definition and usage of an unit type:
```sc
unit seconds of i32;

public static func main() {
    let duration = 12<seconds>;
    
    print("The duration is: " + duration); // prints the duration with the unit measurement type 
}
```
