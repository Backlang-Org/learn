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

The example above is an array of 1 Dimension. You can also define arrays of more dimensions to build a matrix.

To declare a n-th dimensional array:

```back
let matrix : i32[,] = [[0, 1], [1, 0]];
let element = matrix[0, 0];
```

## Exercices

1. Declare an array of all 10 prime numbers and print it to the console.