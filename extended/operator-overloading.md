# Operator Overloading

Operator Overloading gives you the ability to write prettier code. Instead of writing functions you write operators.

> 💡 Overloaded operators should not have side-effects.

## Overloadable Operators

### Unary

| Kind       | Operators | Names          |
|------------|-----------|----------------|
| Arithmetic | - %       | neg percentage |
| Bitwise    | ~         | bitwise_not    |
| Logical    | !         | logical_not    |
| Memory     | * &       | deref addrof   |
| Other      | ?         | unpacking      |
| Other      | default   | default        |

### Binary

| Kind       | Operators | Names                               |
|------------|-----------|-------------------------------------|
| Arithmetic | + - * / % | add sub mul div mod                 |
| Bitwise    | ^ & \|    | exclusive_or bitwise_and bitwise_or |
| Logical    | == !=     | equality inequality                 |

## Operator call syntax

If a type has special member functions they will be treated as operators:

| function | operator | sample              |
| Add      | +        | myList + "appendix" |
| Remove   | -        | myList - "appendix" |

You can also overload the `implicit` operator to make your type implicit castable. The argument is the value to cast from and the return value is the result.

Overloaded operators are functions with the `operator` modifier and the name has to be one of the list above.

Here is a simple example of a `Point` struct.

```sc
public struct Point {
    let X : i32;
    let Y : i32;
}

implement Point {
    operator func add(lhs : Point, rhs : Point) -> Point {
        return Point::new(lhs.X + rhs.X, lhs.Y + rhs.Y);
    }

    operator func neg(p : Point) -> Point {
        return Point::new(-p.X, -p.Y);
    }
}
```

```sc
func main() {
    let p = Point::new(42, 5);
    let negP = -(p + p);

    print(p);
    print(negP);
}
```

## Exercices

1. Write a structure called `Vector2` and implement all neccessary operator that can be applied to a Vector
2. Which operators cannot be overloaded?
3. Why you don't want to overload the memory operators on a `Vector2` struct?
4. What should operators definitly not do and why?
