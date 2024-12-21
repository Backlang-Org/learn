# Casting

## Implicit Casts

Sometimes you want to pass number values of a specific type that is smaller than the required type. Socordia allows you to use those values by an implicit cast. For example: you can use a i32 value if a variable has the type i64. This can be done so long as the two types are of the same kind, e.g. integer and integer; or float and float.

You can also write a custom operator overload to make your custom types implicitly castable.

## Explicit Casts

You can always try to cast a value to another type with the `as` operator. If this is not successful it will return `none`.
