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