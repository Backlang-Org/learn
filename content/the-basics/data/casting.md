# Casting

## Implicit Casts

Sometimes you want to pass number values of a specific type that is smaller than the required type. Backlang allows you to use those values by an implicit cast. For example: you can use a i32 value if a variable has the type i64. As long there are the same kind of type. 

You can also write a custom operator overload to make your custom types implicit castable.

## Explicit Casts

You can always try to cast a value to another type with the `as` operator. If it not succeeds it will return `none`.