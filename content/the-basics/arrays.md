# Arrays

An array can hold multiple values of a specific type. The memory must be preallocated.

The structure of a variable of array type:
```ebnf
<array_type> ::= <typename> "[" ","+ "]"
<expression_list> ::= <expression> "," <expression_list> | <expression>
<array_expression> ::= "[" <expression_list> "]"
```


Simple Example:

```back
let primes : i32[] = [2, 3, 5, 8, 11, 13];
```

A value of the array can be accessed though the index operator in square brackets. Every item has an index to indentify an element. An index starts at zero, so the first element is accessable at index 0, the second element is accessible at index 1 and so on. The index has to be in the bounds of the array. It cannot be negative or higher the length - 1.

```back
print(primes[1]); //access the 2. element
```

A value of the array can be also changed, even if the variable is not mutable. 

```back
primes[3] = 7;
```

