## Unions

An union can be used to hold a value with different types. Unions can be used to avoid casting.

The syntactic structure of an union:
```ebnf
<memory_offset> ::= <int_number>
<union_value> ::= "let" <name> "=" <memory_offset> ";"
<union_declaration> ::= <modifier>? "union" <name> "{" <union_value>* "}"
```

A color union is a good example:
```back

public union Color {
    let mut R: u8 = 0;
    let mut G: u8 = 1;
    let mut B: u8 = 2;
    let mut A: u8 = 3;

    let value: u32 = 0;
}

```

The `value` field can be used to convert all color values (RGBA) to a u32 integer without casting. A union allocates memory for the most sized variable type. In this example the whole union will allocate 4 bytes because the biggest type used in the union is u32.

## Discriminated Unions

A discrimated union is a typed union. It can be used to create a hierarchical type structure easily. And Du's are generating a default constructor and a `ToString` method.

The structure of DU's:

```ebnf
<du_prop> ::= "mutable"? <name> ":" <type>
<du_prop_list> ::= <du_prop> "," <du_prop_list> | <du_prop>
<du_type_def> ::= "|" <name> "(" <du_prop_list> ")"
<du_definition> ::= "type" <name> "=" <du_type_def>* ";"
```

For example we will create a simple DU for an abstract syntax tree:

```back
public type Expression = | Literal(Value : obj)
                  | Group(Inner : Expression)
                  | Binary(Lhs : Expression, Operator : string, Rhs : Expression);
```

The normal equivalent class structure would be:
```back
public abstract class Expression {

}

public class Literal {
    let Value : obj;
}

implement Literal {
    public constructor(value : obj) {
       Value = value;
    }
}

public class Group {
    let Inner: Expression;
}

implement Group {
    public constructor(inner : Expression) {
       Inner = inner;
    }
}

public class Binary {
    let Lhs: Expression;
    let Rhs: Expression;
}

implement Binary {
    public constructor(lhs : Expression) {
       Lhs = lhs;
       Rhs = rhs;
    }
}
```

You see discrimated unions saves a lot of lines of code.