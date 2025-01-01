# Enumerations

An enumeration can give a specific range of numbers a name.

The structure of an enumeration:

```ebnf
<enum_value> ::= <number>
<enum_member> ::= <name> ("=" <enum_value>)?
<enum_declaration> ::= <modifiers> "enum" <name> "{" <enum_member> "}"
```

A simple example:

```sc
public enum ConsoleColor {
    Red = 0,
    Green = 1,
    Blue = 2
}
```

If you leave out the value the compiler assigns the value automatically based on the index.

Exercises

1. Declare an enum for representing the gender of a person and write a `Person` class with a gender field.
2. What can enums be used for?
3. Which values can hold an enum?
