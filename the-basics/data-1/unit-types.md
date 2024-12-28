## Unit Of Measure Types

A unit of measure type can gives a literal a typed unit. So you can use it to ensure that you are working with the right number unit. 

To define a simple unit type:

```ebnf
<unit_def> ::= "unit" <name> "of" <primitiveType> ";"
```

A simple example for a definition and usage of an unit type:
```sc
unit seconds of f32;
unit minutes of f32;

func main() {
    let duration = 12<seconds>;
    
    print("The duration is: " + duration); // prints the duration with the unit measurement type
    print(toMinutes(duration)); // convert the duration to minutes and print with the unit type 
}

func toMinutes(value: unit seconds): unit minutes => value / 60;
```

You can automaticly convert a unit to another unit by providing conversion rules:

```sc
rules for unit seconds
{
    from seconds to minutes = seconds / 60;
    from minutes to seconds = derive from seconds; // automaticly derive conversion rule. In this case the opposite of seconds: minutes * 60
}
```