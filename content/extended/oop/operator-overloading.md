# Operator Overloading

Operator Overloading gives you the ability to write prettier code. Instead of writing functions you write operators.

> 💡 Overloaded operators should not have side-effects.

## Overloadable Operators

### Unary

| Kind       | Operators | Names        |
|------------|-----------|--------------|
| Arithmetic | -         | neg          |
| Bitwise    | ~         | bitwise_not  |
| Logical    | !         | logical_not  |
| Memory     | * &       | deref addrof |

### Binary

| Kind       | Operators | Names                               |
|------------|-----------|-------------------------------------|
| Arithmetic | + - * / % | add sub mul div mod                 |
| Bitwise    | ^ & \|    | exclusive_or bitwise_and bitwise_or |

Overloaded operators are functions with the `operator` modifier and the name has to be one of the list above.

Here is a simple example of a `Point` struct.

```back
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

```back
public static func main() {
    let p = Point::new(42, 5);
    let negP = -p;

    print(p);
    print(negP);
}
```