# Enumerations

An enumeration can give a specific range of numbers a name.

The structure of an enumeration:

```ebnf
<enum_value> ::= <number>
<enum_member> ::= <name> ("=" <enum_value>)?
<enum_declaration> ::= <modifiers> "enum" <name> "{" <enum_member> "}"
```

A simple example:

```back
public enum ConsoleColor {
    Red = 0,
    Green = 1,
    Blue = 2
}
```

If you leave out the value the compiler assigns the value automaticly based on the index.