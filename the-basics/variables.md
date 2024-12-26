# Variables

## Definition

A variable can hold a value. Variables are by default immutable to prevent from changing the value. If you want to change the value later you can declare the variable as mutable with `mut`.

The syntatic structure of a variable definition:
```ebnf
<name> ::= [a-zA-Z_][a-zA-Z0-9_]+
<expression> ::= <literal> | ...
<variable_declaration> ::= "let" "mut"? <name> (":" <typename>)? = <expression> ";"
```

Sample of a variable definition:

```sc
let age = 42;
```

Back can automaticly deduce the type of the variable but if you want to specify the type, here is how:

```sc
let name: string = "Bob";
```

You can also specify the type by a literal type specifier:

```sc
let pi = 3.1451d;
```

A list of all basic primitive datatypes can be found [here](/primitive-datatypes.md).

## Assignments

You can only assign mutable variables. If you try to change an immutable variable the compiler throws an error.

The syntactic structure of assignments:
```ebnf
<assignment> ::= <name> "=" <expression> ";"
```

A simple example:
```sc
let mut day = "Monday";
day = "Tuesday";
```

And now, a _quiz_:

{{#quiz ../../quizzes/variables.toml}}